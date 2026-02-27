import Link from 'next/link';
import VoteButton from './VoteButton';
import type { Post } from '../lib/supabase';

function timeAgo(date: string) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(date).toLocaleDateString();
}

const categoryColors: Record<string, string> = {
  general: 'bg-zinc-700 text-zinc-300',
  'show-and-tell': 'bg-zinc-800 text-zinc-300',
  help: 'bg-yellow-500/10 text-yellow-500',
  ideas: 'bg-blue-500/10 text-blue-400',
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex gap-3 p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors bg-zinc-900/50">
      <VoteButton postId={post.id} initialCount={post.upvotes} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[post.category] || categoryColors.general}`}>
            {post.category.replace(/-/g, ' ')}
          </span>
        </div>
        <Link
          href={`/community/${post.id}`}
          className="block font-medium hover:text-white transition-colors truncate"
        >
          {post.title}
        </Link>
        {post.body && (
          <p className="text-sm text-zinc-500 mt-1 line-clamp-2">{post.body}</p>
        )}
        <div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            {post.author_avatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.author_avatar} alt="" className="w-4 h-4 rounded-full" />
            )}
            <span>{post.author_name}</span>
          </div>
          <span>{timeAgo(post.created_at)}</span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {post.comment_count}
          </span>
        </div>
      </div>
    </div>
  );
}
