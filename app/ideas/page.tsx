'use client';

import { useEffect, useState, useCallback, useRef } from 'react';
import Link from 'next/link';
import { createClient, timeAgo } from '../lib/supabase';
import IdeaCard from '../components/IdeaCard';
import IdeaDrawer from '../components/IdeaDrawer';
import StageBadge from '../components/StageBadge';
import AuthButton from '../components/AuthButton';
import VoteButton from '../components/VoteButton';
import { CardSkeletonList } from '../components/Skeleton';
import type { Post } from '../lib/supabase';

const pipelineStages = ['idea', 'prototype', 'live'] as const;

/* ── Per-project icons (matched by title substring) ── */
function IdeaIcon({ title, className = '' }: { title: string; className?: string }) {
  const t = title.toLowerCase();
  const base = `shrink-0 ${className}`;

  // Brief – lightning bolt (AI-powered digests)
  if (t.includes('brief')) return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );

  // Agent Protocol Layer – connected nodes
  if (t.includes('agent protocol') || t.includes('protocol layer')) return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3" /><circle cx="18" cy="6" r="3" /><circle cx="12" cy="18" r="3" />
      <path d="M8.5 7.5L10.5 16M15.5 7.5L13.5 16M9 6h6" />
    </svg>
  );

  // Execution Layer – terminal/deploy
  if (t.includes('execution layer')) return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );

  // OpenPaper – paper with checkmark
  if (t.includes('openpaper')) return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  );

  // Rocketlist – rocket
  if (t.includes('rocketlist')) return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );

  // BlackDoc – document with redaction bars
  if (t.includes('blackdoc') || t.includes('redaction')) return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" />
      <rect x="8" y="12" width="8" height="2" rx="0.5" fill="currentColor" /><rect x="8" y="16" width="5" height="2" rx="0.5" fill="currentColor" />
    </svg>
  );

  // Default – lightbulb
  return (
    <svg className={base} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 22h4" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5C8.46 12.35 8.82 13 9 14" />
    </svg>
  );
}
type PipelineStage = (typeof pipelineStages)[number];

const stageConfig = {
  idea: {
    label: 'Idea',
    tagline: 'Waiting for traction',
    step: 1,
    dotClass: 'border-blue-500/50 text-blue-400 bg-blue-500/10',
    labelClass: 'text-blue-400',
    emptyBorder: 'border-blue-500/10',
    cardAccent: 'hover:border-blue-500/25',
    cardBg: 'bg-zinc-900/80',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-400',
  },
  prototype: {
    label: 'Prototype',
    tagline: 'Being built and tested',
    step: 2,
    dotClass: 'border-yellow-500/50 text-yellow-500 bg-yellow-500/10',
    labelClass: 'text-yellow-500',
    emptyBorder: 'border-yellow-500/10',
    cardAccent: 'hover:border-yellow-500/25',
    cardBg: 'bg-zinc-900/80',
    iconBg: 'bg-yellow-500/10',
    iconColor: 'text-yellow-500',
  },
  live: {
    label: 'Live',
    tagline: 'Shipped and available',
    step: 3,
    dotClass: 'border-green-500/50 text-green-400 bg-green-500/10',
    labelClass: 'text-green-400',
    emptyBorder: 'border-green-500/10',
    cardAccent: 'border-green-500/[0.12] hover:border-green-500/25',
    cardBg: 'bg-green-500/[0.06]',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-400',
  },
} as const;

/* ── Smart truncation: cut at paragraph or sentence boundary ── */
function truncateAtSentence(text: string, maxLen: number): { truncated: string; wasTruncated: boolean } {
  if (text.length <= maxLen) return { truncated: text, wasTruncated: false };
  const sub = text.slice(0, maxLen);
  // Prefer cutting at a double newline (paragraph break)
  const lastParagraph = sub.lastIndexOf('\n\n');
  if (lastParagraph > maxLen * 0.4) {
    return { truncated: text.slice(0, lastParagraph), wasTruncated: true };
  }
  // Find sentence end, but skip "1. " style numbered list prefixes
  let bestPeriod = -1;
  for (let i = sub.length - 1; i > maxLen * 0.4; i--) {
    if (sub[i] === '.' && i + 1 < sub.length) {
      const next = sub[i + 1];
      // Ensure it's a real sentence end, not "1." or "vs."
      if ((next === ' ' || next === '\n') && i > 0 && /[a-z]/.test(sub[i - 1])) {
        bestPeriod = i;
        break;
      }
    }
  }
  if (bestPeriod > 0) {
    return { truncated: text.slice(0, bestPeriod + 1), wasTruncated: true };
  }
  // Fallback: cut at last space
  const lastSpace = sub.lastIndexOf(' ');
  return { truncated: text.slice(0, lastSpace > 0 ? lastSpace : maxLen) + '...', wasTruncated: true };
}

/* ── Card with mouse-tracking glow ── */
function GlowCard({ children, className, onClick, style }: {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    ref.current.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      className={`card-glow ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ── Pipeline card: richer than IdeaCard, stage-aware styling ── */
function PipelineCard({ post, stage, onSelect, index }: {
  post: Post;
  stage: PipelineStage;
  onSelect: (post: Post) => void;
  index: number;
}) {
  const config = stageConfig[stage];

  return (
    <GlowCard
      onClick={() => onSelect(post)}
      className={`group p-4 rounded-xl border border-zinc-800/80 ${config.cardBg} hover:bg-zinc-800/40 ${config.cardAccent} transition-all duration-200 cursor-pointer hover:scale-[1.01] hover:shadow-lg hover:shadow-black/25 animate-fade-in-up`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div className="flex gap-3">
        <VoteButton postId={post.id} initialCount={post.upvotes} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2.5">
            <div className={`w-7 h-7 rounded-lg ${config.iconBg} flex items-center justify-center shrink-0`}>
              <IdeaIcon title={post.title} className={`w-3.5 h-3.5 ${config.iconColor}`} />
            </div>
            <h3 className="font-semibold text-sm text-zinc-100 group-hover:text-white transition-colors">
              {post.title}
            </h3>
          </div>
          {post.body && (
            <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
              {post.body}
            </p>
          )}
          <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-zinc-500">
            <span>{post.author_name}</span>
            <span className="text-zinc-700">·</span>
            <span>{timeAgo(post.created_at)}</span>
            {post.comment_count > 0 && (
              <>
                <span className="text-zinc-700">·</span>
                <span className="flex items-center gap-0.5">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {post.comment_count}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </GlowCard>
  );
}

/* ── Post-mortem card: expandable rejection reasoning ── */
function PostMortemCard({ post, onSelect, index }: { post: Post; onSelect: (post: Post) => void; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const body = post.body || '';
  const { truncated, wasTruncated } = truncateAtSentence(body, 280);

  return (
    <GlowCard
      className={`group relative p-5 md:p-6 rounded-xl border border-red-500/[0.08] bg-red-500/[0.015] hover:border-red-500/[0.15] hover:bg-red-500/[0.03] transition-all duration-200 hover:scale-[1.005] animate-fade-in-up`}
      style={{ animationDelay: `${index * 50 + 100}ms` }}
    >
      <div className="flex gap-4">
        <VoteButton postId={post.id} initialCount={post.upvotes} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
              <IdeaIcon title={post.title} className="w-4 h-4 text-red-400/70" />
            </div>
            <div className="flex-1 min-w-0">
              <button
                onClick={() => onSelect(post)}
                className="font-semibold text-zinc-300 group-hover:text-white transition-colors text-left"
              >
                {post.title}
              </button>
              <div className="flex items-center gap-1.5 mt-1 text-[11px] text-zinc-600">
                <span>{post.author_name}</span>
                <span className="text-zinc-700">·</span>
                <span>{timeAgo(post.created_at)}</span>
              </div>
            </div>
          </div>
          {body && (
            <div className="mt-3 ml-11">
              <p className="text-sm text-zinc-500 leading-relaxed whitespace-pre-wrap">
                {truncated}
              </p>
              {wasTruncated && (
                <>
                  <div
                    className="grid transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: expanded ? '1fr' : '0fr' }}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-zinc-500 leading-relaxed whitespace-pre-wrap pt-1">
                        {body.slice(truncated.length).replace(/^\n+/, '')}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-xs text-zinc-600 hover:text-zinc-400 mt-2 transition-colors inline-flex items-center gap-1"
                  >
                    {expanded ? 'Show less' : 'Read full reasoning'}
                    <svg
                      className={`w-3 h-3 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </GlowCard>
  );
}

/* ── Progress track connecting the three pipeline stages ── */
function ProgressTrack({ counts }: { counts: Record<PipelineStage, number> }) {
  return (
    <div className="hidden md:flex items-center mb-10 animate-fade-in-up">
      {pipelineStages.map((s, i) => (
        <div key={s} className="contents">
          <div className="flex items-center gap-2.5">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 ${stageConfig[s].dotClass} shadow-sm`}>
              {stageConfig[s].step}
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className={`text-sm font-semibold ${stageConfig[s].labelClass} font-[family-name:var(--font-space-grotesk)]`}>
                {stageConfig[s].label}
              </span>
              <span className="text-[10px] text-zinc-600">
                {counts[s]}
              </span>
            </div>
          </div>
          {i < pipelineStages.length - 1 && (
            <div className="flex-1 mx-5 flex items-center">
              <div className="w-full h-[2px] bg-zinc-700/80 rounded-full" />
              <svg className="w-4 h-4 text-zinc-500 shrink-0 -ml-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function IdeasPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<PipelineStage>('idea');
  const [user, setUser] = useState<{ id: string } | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [search, setSearch] = useState('');
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchIdeas() {
      setLoading(true);
      const { data } = await supabase
        .from('posts')
        .select('*')
        .not('stage', 'is', null)
        .order('upvotes', { ascending: false });

      if (data) setPosts(data as Post[]);
      setLoading(false);
    }
    fetchIdeas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVoteChanged = useCallback((e: Event) => {
    const { postId, count } = (e as CustomEvent).detail;
    setPosts((prev) => prev.map((p) => p.id === postId ? { ...p, upvotes: count } : p));
    setSelectedPost((prev) => prev && prev.id === postId ? { ...prev, upvotes: count } : prev);
  }, []);

  useEffect(() => {
    window.addEventListener('vote-changed', handleVoteChanged);
    return () => window.removeEventListener('vote-changed', handleVoteChanged);
  }, [handleVoteChanged]);

  const filtered = search.trim()
    ? posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    : posts;

  const pipeline = {
    idea: filtered.filter((p) => p.stage === 'idea'),
    prototype: filtered.filter((p) => p.stage === 'prototype'),
    live: filtered.filter((p) => p.stage === 'live'),
  };
  const rejected = filtered.filter((p) => p.stage === 'rejected');

  const counts = {
    idea: pipeline.idea.length,
    prototype: pipeline.prototype.length,
    live: pipeline.live.length,
  };

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <div className="flex items-start justify-between mb-4 animate-fade-in-up">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight font-[family-name:var(--font-space-grotesk)]">Idea House</h1>
            <p className="text-sm text-zinc-500 mt-1.5 max-w-md">
              Our public product pipeline. Submit ideas, vote on what matters, watch them ship.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <AuthButton />
            {user && (
              <Link
                href="/ideas/new"
                className="btn-shine px-4 py-2 bg-green-500 text-black text-sm font-medium rounded-lg hover:bg-green-400 transition-colors"
              >
                Submit Idea
              </Link>
            )}
          </div>
        </div>

        {/* ── Search ── */}
        <div className="mb-10 animate-fade-in-up-delay-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter ideas..."
            className="w-full max-w-sm bg-zinc-900/80 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-600 placeholder:text-zinc-600 transition-colors"
          />
        </div>

        {loading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {pipelineStages.map((s) => (
              <div key={s}>
                <div className="flex items-center gap-2 mb-4">
                  <StageBadge stage={s} />
                </div>
                <CardSkeletonList count={2} />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* ── Progress track (desktop) ── */}
            <ProgressTrack counts={counts} />

            {/* ── Mobile tabs ── */}
            <div className="md:hidden mb-6">
              <div className="flex gap-1 bg-zinc-900 rounded-lg p-1">
                {pipelineStages.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveTab(s)}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === s ? 'bg-zinc-800 text-white' : 'text-zinc-500'
                    }`}
                  >
                    <StageBadge stage={s} /> <span className="ml-1 text-zinc-600">{pipeline[s].length}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 space-y-3">
                {pipeline[activeTab].length === 0 ? (
                  <p className="text-sm text-zinc-600 text-center py-8">No ideas in this stage yet.</p>
                ) : (
                  pipeline[activeTab].map((post) => (
                    <IdeaCard key={post.id} post={post} onSelect={setSelectedPost} />
                  ))
                )}
              </div>
            </div>

            {/* ── Desktop pipeline columns ── */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {pipelineStages.map((s) => (
                <div key={s} className="space-y-3">
                  {pipeline[s].length === 0 ? (
                    <div className={`rounded-xl border border-dashed ${stageConfig[s].emptyBorder} p-10 text-center animate-fade-in-up`}>
                      <p className="text-xs text-zinc-600">{stageConfig[s].tagline}</p>
                      <p className="text-[11px] text-zinc-700 mt-1">No ideas yet</p>
                    </div>
                  ) : (
                    pipeline[s].map((post, i) => (
                      <PipelineCard key={post.id} post={post} stage={s} onSelect={setSelectedPost} index={i} />
                    ))
                  )}
                </div>
              ))}
            </div>

            {/* ── Post-Mortems ── */}
            {rejected.length > 0 && (
              <div className="mt-12 pt-8 border-t border-zinc-800/50">
                <div className="flex items-center gap-3 mb-1.5 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
                  <div className="w-8 h-8 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-red-400/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-zinc-300 font-[family-name:var(--font-space-grotesk)]">Post-Mortems</h2>
                </div>
                <p className="text-sm text-zinc-500 mb-8 ml-11 max-w-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                  Ideas we explored and decided to kill. Every rejection has a reason, because failed experiments are worth sharing too.
                </p>
                <div className="space-y-4 max-w-3xl">
                  {rejected.map((post, i) => (
                    <PostMortemCard key={post.id} post={post} onSelect={setSelectedPost} index={i} />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <IdeaDrawer post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  );
}
