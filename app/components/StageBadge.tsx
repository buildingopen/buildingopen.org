const stageStyles = {
  idea: 'bg-blue-500/10 text-blue-400',
  prototype: 'bg-yellow-500/10 text-yellow-500',
  live: 'bg-green-500/10 text-green-400',
} as const;

const stageLabels = {
  idea: 'Idea',
  prototype: 'Prototype',
  live: 'Live',
} as const;

export default function StageBadge({ stage }: { stage: 'idea' | 'prototype' | 'live' }) {
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${stageStyles[stage]}`}>
      {stageLabels[stage]}
    </span>
  );
}
