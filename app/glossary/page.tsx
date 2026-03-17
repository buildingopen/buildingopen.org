'use client';

import { useState } from 'react';

type Term = {
  name: string;
  oneliner: string;
  explanation: string;
  category: 'Economics & Systems' | 'Philosophy & Logic' | 'Technology & Engineering' | 'Cognitive & Organizational' | 'AI & Intelligence';
};

const terms: Term[] = [
  {
    name: 'Jevons Paradox',
    oneliner: 'Efficiency gains increase total consumption.',
    explanation: 'When a resource becomes cheaper to use through technological improvement, people tend to use more of it, not less. Coal consumption rose after the steam engine became more efficient. Today we see the same with energy, bandwidth, and storage.',
    category: 'Economics & Systems',
  },
  {
    name: 'Rebound Effect',
    oneliner: 'Efficiency savings partially offset by increased use.',
    explanation: 'A milder version of Jevons Paradox. When something becomes more efficient, the savings are partially eaten up by behavioral changes. A more fuel-efficient car might encourage longer drives, clawing back some of the expected savings.',
    category: 'Economics & Systems',
  },
  {
    name: 'Tragedy of the Commons',
    oneliner: 'Shared resources depleted when individuals act in self-interest.',
    explanation: 'When a resource is shared and unregulated, each individual has an incentive to take as much as possible before others do. Overfishing, pollution, and bandwidth hogging all follow this pattern. The solution usually involves coordination or enforceable rules.',
    category: 'Economics & Systems',
  },
  {
    name: "Goodhart's Law",
    oneliner: 'When a measure becomes a target, it ceases to be a good measure.',
    explanation: 'Once people know what metric is being optimized, they game it. A school ranked by test scores will teach to the test. A company measured by lines of code will produce verbose software. The metric stops reflecting the thing it was supposed to measure.',
    category: 'Economics & Systems',
  },
  {
    name: "Campbell's Law",
    oneliner: 'The more a metric is used for decisions, the more it gets corrupted.',
    explanation: "Closely related to Goodhart's Law but focused on social indicators. When quantitative metrics drive policy or reward, people will distort the processes being measured. Crime statistics drop not because crime decreases, but because reporting changes.",
    category: 'Economics & Systems',
  },
  {
    name: "Metcalfe's Law",
    oneliner: "A network's value grows with the square of its users.",
    explanation: 'A telephone is useless if only one person has one. With two people, there is one connection. With five, there are ten. The value of a network increases disproportionately as more people join, which explains why platforms like social networks exhibit winner-take-all dynamics.',
    category: 'Economics & Systems',
  },
  {
    name: 'Paradox of Analysis',
    oneliner: 'Defining a concept changes or loses its meaning.',
    explanation: 'If an analysis is correct, then the concept being analyzed should be identical to the analysis. But if they are identical, the analysis says nothing new. This tension shows up whenever we try to formalize intuitive concepts like justice, beauty, or knowledge.',
    category: 'Philosophy & Logic',
  },
  {
    name: 'Paradox of Tolerance',
    oneliner: 'Tolerating intolerance destroys tolerance.',
    explanation: 'Karl Popper argued in 1945 that unlimited tolerance leads to the disappearance of tolerance. If a society extends tolerance to those who are actively intolerant, the intolerant will eventually seize the opportunity to destroy the tolerant. Tolerance must therefore have limits.',
    category: 'Philosophy & Logic',
  },
  {
    name: 'Ship of Theseus',
    oneliner: 'If every part is replaced, is it still the same thing?',
    explanation: 'An ancient thought experiment about identity. If you replace every plank of a ship one at a time, is it the same ship? This applies to software rewrites, company culture after turnover, and even our own bodies, where cells are continuously replaced.',
    category: 'Philosophy & Logic',
  },
  {
    name: "Chesterton's Fence",
    oneliner: "Don't remove something until you understand why it's there.",
    explanation: "Before tearing down a fence, first ask why someone built it. The principle applies to legacy code, regulations, and organizational processes. What looks pointless might serve a purpose you haven't discovered yet. Understand before you change.",
    category: 'Philosophy & Logic',
  },
  {
    name: "Conway's Law",
    oneliner: 'Organizations design systems that mirror their communication structure.',
    explanation: 'A company with four teams will produce a four-component architecture. The way people talk to each other shapes the software they build. This is why reorganizing teams often matters more than reorganizing code.',
    category: 'Technology & Engineering',
  },
  {
    name: "Brooks's Law",
    oneliner: 'Adding people to a late project makes it later.',
    explanation: 'New team members need onboarding, which takes time from existing members. Communication overhead grows with each person added. Fred Brooks observed this in The Mythical Man-Month (1975), and it remains one of the most ignored truths in software management.',
    category: 'Technology & Engineering',
  },
  {
    name: "Gall's Law",
    oneliner: 'Complex systems that work evolved from simple systems that worked.',
    explanation: 'You cannot design a complex system from scratch and expect it to work. Every successful complex system started as a simple system that was gradually extended. This is why big-bang rewrites fail and iterative development succeeds.',
    category: 'Technology & Engineering',
  },
  {
    name: 'Streisand Effect',
    oneliner: 'Trying to suppress information makes it spread more.',
    explanation: "Named after Barbra Streisand's attempt to suppress photos of her home, which backfired spectacularly. The act of censoring draws attention to the very thing being hidden. Applies to takedown notices, corporate cover-ups, and internet moderation.",
    category: 'Technology & Engineering',
  },
  {
    name: 'Dunning-Kruger Effect',
    oneliner: 'Low competence overestimates ability; high competence underestimates.',
    explanation: 'People with limited knowledge in a domain lack the expertise to recognize their own incompetence. Meanwhile, experts assume that what is easy for them is easy for everyone. The result is a systematic miscalibration of confidence at both ends of the skill spectrum.',
    category: 'Cognitive & Organizational',
  },
  {
    name: 'Survivorship Bias',
    oneliner: 'Focusing on successes while ignoring failures skews conclusions.',
    explanation: "We study successful startups and try to copy their traits, forgetting that failed startups might have had the same traits. WWII engineers wanted to armor the parts of returning planes that had bullet holes, until Abraham Wald pointed out they should armor the parts without holes\u2014those were the planes that didn't make it back.",
    category: 'Cognitive & Organizational',
  },
  {
    name: 'Peter Principle',
    oneliner: 'People rise to their level of incompetence.',
    explanation: 'In a hierarchy, employees are promoted based on success in their current role. This continues until they reach a role they are not good at, where they remain. The result is that every position tends to be occupied by someone unable to fulfill its duties.',
    category: 'Cognitive & Organizational',
  },
  {
    name: "Parkinson's Law",
    oneliner: 'Work expands to fill the time available.',
    explanation: 'Give a task one week, it takes one week. Give it one day, it takes one day. Cyril Northcote Parkinson observed this in 1955 about bureaucracies, but it applies to any project. Tight deadlines force prioritization; generous ones invite scope creep.',
    category: 'Cognitive & Organizational',
  },
  {
    name: 'Lindy Effect',
    oneliner: "The longer something has survived, the longer it's likely to survive.",
    explanation: 'A book that has been in print for 50 years will probably be in print for another 50. A technology that has lasted a decade is more likely to last another decade than something released last year. Age is evidence of robustness for non-perishable things.',
    category: 'Cognitive & Organizational',
  },
  {
    name: 'Agent',
    oneliner: 'An AI that can use tools.',
    explanation: 'A language model becomes an agent when it can take actions in the real world: calling APIs, reading files, running code, browsing the web. Without tools, a model can only generate text. With tools, it can do things. The distinction matters because most "AI products" are just prompts wrapped in a UI, while agents actually interact with systems and produce outcomes.',
    category: 'AI & Intelligence',
  },
  {
    name: 'Causal Inference',
    oneliner: 'Determining whether X actually causes Y, not just correlates.',
    explanation: 'Most data tells you that two things move together. Causal inference asks whether one actually drives the other. Without it, you confuse correlation with causation: ice cream sales and drownings both rise in summer, but ice cream does not cause drowning. The field gives you tools (randomized experiments, instrumental variables, do-calculus) to answer "what would happen if we changed X?" rather than just "what happened when X changed." Foundational to A/B testing, policy evaluation, and understanding why AI models make decisions.',
    category: 'AI & Intelligence',
  },
];

const categories = ['Economics & Systems', 'Philosophy & Logic', 'Technology & Engineering', 'Cognitive & Organizational', 'AI & Intelligence'] as const;

const categoryColors: Record<string, string> = {
  'Economics & Systems': 'bg-green-500/10 text-green-500 border-green-500/20',
  'Philosophy & Logic': 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  'Technology & Engineering': 'bg-amber-500/10 text-amber-500 border-amber-500/20',
  'Cognitive & Organizational': 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  'AI & Intelligence': 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20',
};

export default function GlossaryPage() {
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggle = (name: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });
  };

  const filtered = terms.filter((t) => {
    const matchesSearch =
      !search ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.oneliner.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !activeCategory || t.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const grouped = categories
    .map((cat) => ({
      category: cat,
      items: filtered.filter((t) => t.category === cat),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-3xl font-bold mb-2">Glossary</h1>
        <p className="text-zinc-500 mb-8">
          Concepts, paradoxes, and mental models worth knowing.
        </p>

        {/* Search */}
        <div className="relative mb-6">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search terms..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 transition-colors"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                activeCategory === cat
                  ? categoryColors[cat]
                  : 'border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Terms */}
        {grouped.map((group) => (
          <section key={group.category} className="mb-10">
            <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
              {group.category}
            </h2>
            <div className="space-y-2">
              {group.items.map((term) => {
                const isOpen = expanded.has(term.name);
                return (
                  <div
                    key={term.name}
                    className="border border-zinc-800 rounded-lg overflow-hidden transition-colors hover:border-zinc-700"
                  >
                    <button
                      onClick={() => toggle(term.name)}
                      className="w-full text-left px-4 py-3 flex items-start justify-between gap-4"
                    >
                      <div className="min-w-0">
                        <span className="font-semibold text-white">{term.name}</span>
                        <span className="text-zinc-500 ml-2 text-sm">{term.oneliner}</span>
                      </div>
                      <svg
                        className={`w-4 h-4 text-zinc-500 flex-shrink-0 mt-1 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4">
                        <p className="text-zinc-400 text-sm leading-relaxed">{term.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}

        {filtered.length === 0 && (
          <p className="text-zinc-500 text-center py-12">No terms match your search.</p>
        )}
      </div>
    </article>
  );
}
