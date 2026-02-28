'use client';

import { useState } from 'react';
import { createClient } from '../lib/supabase';
import StageBadge from './StageBadge';

const stages = ['idea', 'prototype', 'live'] as const;
type Stage = (typeof stages)[number];

export default function StageControl({
  postId,
  currentStage,
  authorId,
  userId,
  userEmail,
}: {
  postId: string;
  currentStage: Stage;
  authorId: string | null;
  userId: string | null;
  userEmail: string | null;
}) {
  const [stage, setStage] = useState<Stage>(currentStage);
  const [updating, setUpdating] = useState(false);
  const supabase = createClient();

  const isAuthor = userId && authorId && userId === authorId;
  const isAdmin = userEmail === 'depontefede@gmail.com';
  const canControl = isAuthor || isAdmin;

  const currentIndex = stages.indexOf(stage);
  const canAdvance = canControl && currentIndex < stages.length - 1;
  const canDemote = isAdmin && currentIndex > 0;

  const updateStage = async (newStage: Stage) => {
    setUpdating(true);
    const { error } = await supabase.from('posts').update({ stage: newStage }).eq('id', postId);
    if (!error) setStage(newStage);
    setUpdating(false);
  };

  return (
    <div className="flex items-center gap-3">
      <StageBadge stage={stage} />
      {canControl && (
        <div className="flex items-center gap-1.5">
          {canDemote && (
            <button
              onClick={() => updateStage(stages[currentIndex - 1])}
              disabled={updating}
              className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
            >
              Demote
            </button>
          )}
          {canAdvance && (
            <button
              onClick={() => updateStage(stages[currentIndex + 1])}
              disabled={updating}
              className="px-2.5 py-1 text-xs rounded-lg bg-zinc-800 text-zinc-300 hover:text-white transition-colors disabled:opacity-50"
            >
              Advance to {stages[currentIndex + 1]}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
