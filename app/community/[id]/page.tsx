'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '../../lib/supabase';
import VoteButton from '../../components/VoteButton';
import CommentThread from '../../components/CommentThread';
import AuthButton from '../../components/AuthButton';
import type { Post, Comment } from '../../lib/supabase';

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

export default function PostPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentBody, setCommentBody] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [user, setUser] = useState<{ id: string; user_metadata: Record<string, string> } | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUser(data.user as typeof user);
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      const [postRes, commentsRes] = await Promise.all([
        supabase.from('posts').select('*').eq('id', id).single(),
        supabase.from('comments').select('*').eq('post_id', id).order('created_at'),
      ]);

      if (postRes.data) setPost(postRes.data as Post);
      if (commentsRes.data) setComments(buildTree(commentsRes.data as Comment[]));
      setLoading(false);
    }
    fetchData();
  }, [id]);

  const handleComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentBody.trim() || !user) return;
    setSubmitting(true);

    const { data, error } = await supabase
      .from('comments')
      .insert({
        post_id: id,
        body: commentBody.trim(),
        author_name: user.user_metadata?.user_name || 'Anonymous',
        author_avatar: user.user_metadata?.avatar_url || null,
        author_id: user.id,
      })
      .select()
      .single();

    if (!error && data) {
      setComments([...comments, { ...(data as Comment), replies: [] }]);
      setCommentBody('');
      // Update comment count
      if (post) {
        await supabase.from('posts').update({ comment_count: post.comment_count + 1 }).eq('id', id);
        setPost({ ...post, comment_count: post.comment_count + 1 });
      }
    }
    setSubmitting(false);
  };

  if (loading) {
    return (
      <div className="py-16 text-center">
        <div className="inline-block w-5 h-5 border-2 border-zinc-600 border-t-green-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="py-16 text-center">
        <p className="text-zinc-500">Post not found.</p>
        <Link href="/community" className="text-green-500 text-sm mt-2 inline-block">
          Back to community
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <Link
          href="/community"
          className="text-sm text-zinc-500 hover:text-white transition-colors mb-6 inline-block"
        >
          ← Back
        </Link>

        {/* Post */}
        <div className="flex gap-4">
          <VoteButton postId={post.id} initialCount={post.upvotes} />
          <div className="flex-1">
            <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400 mb-2 inline-block">
              {post.category.replace(/-/g, ' ')}
            </span>
            <h1 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h1>
            <div className="flex items-center gap-2 text-xs text-zinc-500 mb-4">
              {post.author_avatar && (
                <img src={post.author_avatar} alt="" className="w-5 h-5 rounded-full" />
              )}
              <span>{post.author_name}</span>
              <span>·</span>
              <span>{timeAgo(post.created_at)}</span>
            </div>
            {post.body && (
              <div className="text-zinc-300 whitespace-pre-wrap leading-relaxed">
                {post.body}
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-zinc-800 my-8" />

        {/* Comment form */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-zinc-400">
            {post.comment_count} comment{post.comment_count !== 1 ? 's' : ''}
          </h2>
          <AuthButton />
        </div>

        {user && (
          <form onSubmit={handleComment} className="mb-6">
            <textarea
              value={commentBody}
              onChange={(e) => setCommentBody(e.target.value)}
              placeholder="Write a comment..."
              rows={3}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 resize-none"
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={submitting || !commentBody.trim()}
                className="px-4 py-2 bg-green-500 text-black text-sm font-medium rounded-lg hover:bg-green-400 transition-colors disabled:opacity-50"
              >
                Comment
              </button>
            </div>
          </form>
        )}

        {/* Comments */}
        <CommentThread comments={comments} postId={post.id} />
      </div>
    </div>
  );
}
