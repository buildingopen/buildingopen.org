import VoteButton from './VoteButton';
import { timeAgo } from '../lib/supabase';
import type { Post } from '../lib/supabase';

export default function IdeaCard({ post, onSelect }: { post: Post; onSelect?: (post: Post) => void }) {
  return (
    <div className="flex gap-3 p-3 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-colors bg-zinc-900/50">
      <VoteButton postId={post.id} initialCount={post.upvotes} />
      <div className="flex-1 min-w-0">
        <button
          onClick={() => onSelect?.(post)}
          className="block font-medium text-sm hover:text-white transition-colors truncate text-left w-full"
        >
          {post.title}
        </button>
        <div className="flex items-center gap-2 mt-1.5 text-xs text-zinc-500">
          <span>{post.author_name}</span>
          <span>{timeAgo(post.created_at)}</span>
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {post.comment_count}
          </span>
        </div>
      </div>
    </div>
  );
}
