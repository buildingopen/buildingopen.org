'use client';

import { useEffect, useState, useCallback } from 'react';
import VoteButton from './VoteButton';
import ConfirmModal from './ConfirmModal';
import { createClient, timeAgo } from '../lib/supabase';
import type { Comment } from '../lib/supabase';

function ReplyForm({
  postId,
  parentId,
  onSubmitted,
  onCancel,
}: {
  postId: string;
  parentId: string;
  onSubmitted: (comment: Comment) => void;
  onCancel: () => void;
}) {
  const [body, setBody] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;
    setSubmitting(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
      .from('comments')
      .insert({
        post_id: postId,
        parent_id: parentId,
        body: body.trim(),
        author_name: user.user_metadata?.user_name || user.user_metadata?.email?.split('@')[0] || 'Anonymous',
        author_avatar: user.user_metadata?.avatar_url || null,
        author_id: user.id,
      })
      .select()
      .single();

    if (!error && data) {
      onSubmitted(data as Comment);
      setBody('');
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 ml-8">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write a reply..."
        rows={2}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-zinc-500 resize-none"
      />
      <div className="flex gap-2 mt-1">
        <button
          type="submit"
          disabled={submitting || !body.trim()}
          className="px-3 py-1 bg-green-500 text-black text-xs font-medium rounded hover:bg-green-400 transition-colors disabled:opacity-50"
        >
          Reply
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 text-xs text-zinc-500 hover:text-white transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function countAllReplies(comment: Comment): number {
  const replies = comment.replies || [];
  return replies.reduce((sum, r) => sum + 1 + countAllReplies(r), 0);
}

function CommentItem({
  comment,
  postId,
  userId,
  depth = 0,
  onDeleted,
  onCountChange,
}: {
  comment: Comment;
  postId: string;
  userId: string | null;
  depth?: number;
  onDeleted?: (commentId: string, totalRemoved: number) => void;
  onCountChange?: (delta: number) => void;
}) {
  const [showReply, setShowReply] = useState(false);
  const [replies, setReplies] = useState<Comment[]>(comment.replies || []);
  const [editing, setEditing] = useState(false);
  const [editBody, setEditBody] = useState(comment.body);
  const [saving, setSaving] = useState(false);
  const [currentBody, setCurrentBody] = useState(comment.body);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const supabase = createClient();

  const isAuthor = userId && comment.author_id === userId;

  const handleReplySubmitted = (newReply: Comment) => {
    setReplies((prev) => [...prev, { ...newReply, replies: [] }]);
    setShowReply(false);
    onCountChange?.(1);
  };

  const handleEdit = async () => {
    if (!editBody.trim()) return;
    setSaving(true);
    const { error } = await supabase
      .from('comments')
      .update({ body: editBody.trim() })
      .eq('id', comment.id);
    if (!error) {
      setCurrentBody(editBody.trim());
      setEditing(false);
    }
    setSaving(false);
  };

  const handleDelete = async () => {
    setDeleting(true);
    // DB has ON DELETE CASCADE on parent_id FK, so children are auto-deleted
    const childCount = countAllReplies({ ...comment, replies });
    const { error } = await supabase
      .from('comments')
      .delete()
      .eq('id', comment.id);
    if (!error) {
      onDeleted?.(comment.id, 1 + childCount);
    }
    setDeleting(false);
    setShowDeleteConfirm(false);
  };

  const handleChildDeleted = (childId: string, totalRemoved: number) => {
    setReplies((prev) => prev.filter((r) => r.id !== childId));
    onCountChange?.(-totalRemoved);
  };

  return (
    <div className={`${depth > 0 ? 'ml-6 border-l border-zinc-800 pl-4' : ''}`}>
      <div className="flex gap-3 py-3">
        <VoteButton commentId={comment.id} initialCount={comment.upvotes} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 text-xs text-zinc-500">
            {comment.author_avatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={comment.author_avatar} alt={`${comment.author_name}'s avatar`} className="w-4 h-4 rounded-full" />
            )}
            <span className="font-medium text-zinc-400">{comment.author_name}</span>
            <span>{timeAgo(comment.created_at)}</span>
          </div>
          {editing ? (
            <div className="space-y-2">
              <textarea
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                rows={3}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-zinc-500 resize-none"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleEdit}
                  disabled={saving || !editBody.trim()}
                  className="px-3 py-1 bg-green-500 text-black text-xs font-medium rounded hover:bg-green-400 transition-colors disabled:opacity-50"
                >
                  {saving ? 'Saving...' : 'Save'}
                </button>
                <button
                  onClick={() => { setEditing(false); setEditBody(currentBody); }}
                  className="px-3 py-1 text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-zinc-300 whitespace-pre-wrap">{currentBody}</p>
          )}
          <div className="flex items-center gap-2 mt-1">
            {depth < 3 && !editing && (
              <button
                onClick={() => setShowReply(!showReply)}
                className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Reply
              </button>
            )}
            {isAuthor && !editing && (
              <>
                <button
                  onClick={() => setEditing(true)}
                  className="text-xs text-zinc-600 hover:text-white transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="text-xs text-zinc-600 hover:text-red-400 transition-colors"
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      {showReply && (
        <ReplyForm
          postId={postId}
          parentId={comment.id}
          onSubmitted={handleReplySubmitted}
          onCancel={() => setShowReply(false)}
        />
      )}
      {replies.map((reply) => (
        <CommentItem
          key={reply.id}
          comment={reply}
          postId={postId}
          userId={userId}
          depth={depth + 1}
          onDeleted={handleChildDeleted}
          onCountChange={onCountChange}
        />
      ))}
      <ConfirmModal
        open={showDeleteConfirm}
        title="Delete comment"
        message={replies.length > 0
          ? `This will permanently delete your comment and ${replies.length} ${replies.length === 1 ? 'reply' : 'replies'}. This cannot be undone.`
          : 'This will permanently delete your comment. This cannot be undone.'}
        confirmLabel="Delete"
        loading={deleting}
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteConfirm(false)}
      />
    </div>
  );
}

export default function CommentThread({
  comments,
  postId,
  onCommentCountChange,
}: {
  comments: Comment[];
  postId: string;
  onCommentCountChange?: (delta: number) => void;
}) {
  const [userId, setUserId] = useState<string | null>(null);
  const [items, setItems] = useState(comments);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUserId(data.user.id);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setItems(comments);
  }, [comments]);

  const handleDeleted = useCallback((commentId: string, totalRemoved: number) => {
    setItems((prev) => prev.filter((c) => c.id !== commentId));
    onCommentCountChange?.(-totalRemoved);
  }, [onCommentCountChange]);

  const handleCountChange = useCallback((delta: number) => {
    onCommentCountChange?.(delta);
  }, [onCommentCountChange]);

  return (
    <div className="space-y-0 divide-y divide-zinc-800/50">
      {items.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          postId={postId}
          userId={userId}
          onDeleted={handleDeleted}
          onCountChange={handleCountChange}
        />
      ))}
      {items.length === 0 && (
        <p className="text-sm text-zinc-600 py-4">No comments yet. Be the first.</p>
      )}
    </div>
  );
}
