'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient, timeAgo } from '../lib/supabase';
import VoteButton from './VoteButton';
import CommentThread from './CommentThread';
import type { Post, Comment } from '../lib/supabase';

function buildTree(comments: Comment[]): Comment[] {
  const map = new Map<string, Comment>();
  const roots: Comment[] = [];
  comments.forEach((c) => map.set(c.id, { ...c, replies: [] }));
  comments.forEach((c) => {
    const node = map.get(c.id)!;
    if (c.parent_id && map.has(c.parent_id)) {
      map.get(c.parent_id)!.replies!.push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}

const categoryColors: Record<string, string> = {
  general: 'bg-zinc-700 text-zinc-300',
  'show-and-tell': 'bg-zinc-800 text-zinc-300',
  help: 'bg-yellow-500/10 text-yellow-500',
};

export default function PostDrawer({
  post,
  onClose,
}: {
  post: Post | null;
  onClose: () => void;
}) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingComments, setLoadingComments] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    if (!post) return;
    setLoadingComments(true);
    supabase
      .from('comments')
      .select('*')
      .eq('post_id', post.id)
      .order('created_at')
      .then(({ data }) => {
        if (data) setComments(buildTree(data as Comment[]));
        setLoadingComments(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post?.id]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [post, onClose]);

  if (!post) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-zinc-950 border-l border-zinc-800 overflow-y-auto">
        <div className="sticky top-0 bg-zinc-950/90 backdrop-blur-sm border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
          <Link
            href={`/community/${post.id}`}
            className="text-xs text-zinc-500 hover:text-white transition-colors"
          >
            Open full page &rarr;
          </Link>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 py-6">
          <div className="flex gap-4">
            <VoteButton postId={post.id} initialCount={post.upvotes} />
            <div className="flex-1">
              <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[post.category] || categoryColors.general} mb-2 inline-block`}>
                {post.category.replace(/-/g, ' ')}
              </span>
              <h2 className="text-lg font-bold mb-2">{post.title}</h2>
              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
                {post.author_avatar && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.author_avatar} alt={`${post.author_name}'s avatar`} className="w-5 h-5 rounded-full" />
                )}
                <span>{post.author_name}</span>
                <span>&middot;</span>
                <span>{timeAgo(post.created_at)}</span>
              </div>
              {post.body && (
                <div className="text-zinc-300 text-sm whitespace-pre-wrap leading-relaxed">
                  {post.body}
                </div>
              )}
            </div>
          </div>

          <div className="border-t border-zinc-800 mt-6 pt-6">
            <h3 className="text-sm font-medium text-zinc-400 mb-4">
              {post.comment_count} comment{post.comment_count !== 1 ? 's' : ''}
            </h3>
            {loadingComments ? (
              <div className="text-center py-4">
                <div className="inline-block w-4 h-4 border-2 border-zinc-600 border-t-green-500 rounded-full animate-spin" />
              </div>
            ) : comments.length > 0 ? (
              <CommentThread comments={comments} postId={post.id} />
            ) : (
              <p className="text-sm text-zinc-600">No comments yet.</p>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800">
            <Link
              href={`/community/${post.id}`}
              className="block text-center px-4 py-3 bg-zinc-800 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
            >
              Open full page to comment and edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
