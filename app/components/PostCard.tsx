import VoteButton from './VoteButton';
import { timeAgo } from '../lib/supabase';
import type { Post } from '../lib/supabase';

const categoryColors: Record<string, string> = {
  general: 'bg-zinc-700 text-zinc-300',
  'show-and-tell': 'bg-zinc-800 text-zinc-300',
  help: 'bg-yellow-500/10 text-yellow-500',
};

export default function PostCard({ post, onSelect }: { post: Post; onSelect?: (post: Post) => void }) {
  return (
    <div className="flex gap-3 p-4 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors bg-zinc-900/50">
      <VoteButton postId={post.id} initialCount={post.upvotes} />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-xs px-2 py-0.5 rounded-full ${categoryColors[post.category] || categoryColors.general}`}>
            {post.category.replace(/-/g, ' ')}
          </span>
        </div>
        <button
          onClick={() => onSelect?.(post)}
          className="block font-medium hover:text-white transition-colors truncate text-left w-full"
        >
          {post.title}
        </button>
        {post.body && (
          <p className="text-sm text-zinc-500 mt-1 line-clamp-2">{post.body}</p>
        )}
        <div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
          <div className="flex items-center gap-1.5">
            {post.author_avatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={post.author_avatar} alt={`${post.author_name}'s avatar`} className="w-4 h-4 rounded-full" />
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
