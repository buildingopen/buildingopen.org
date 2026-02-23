'use client';

import Link from 'next/link';

export default function CommunityPage() {
  const discussions = [
    {
      id: 1,
      title: 'How do I run the AI writing assistant locally?',
      author: 'Alex D.',
      replies: 12,
      category: 'Support',
      time: '2h ago',
    },
    {
      id: 2,
      title: 'Sharing my custom document generator templates',
      author: 'Sarah M.',
      replies: 45,
      category: 'Showcase',
      time: '5h ago',
    },
    {
      id: 3,
      title: 'RFC: Moving presentation tools to a plugin architecture',
      author: 'Core Team',
      replies: 89,
      category: 'Development',
      time: '1d ago',
    },
    {
      id: 4,
      title: 'Welcome to the Building Open Community!',
      author: 'Core Team',
      replies: 156,
      category: 'Announcements',
      time: '2d ago',
    },
  ];

  const handleDeadLink = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('This is a wireframe. Category filtering and new discussions are coming soon!');
  };

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">Community Discussions</h1>
            <p className="text-zinc-400 text-sm sm:text-base">Join the conversation. Get help, share ideas, and build together.</p>
          </div>
          <button 
            onClick={handleDeadLink}
            className="px-4 py-2 bg-white text-black rounded font-medium hover:bg-zinc-200 transition-colors self-start sm:self-auto w-full sm:w-auto"
          >
            New Discussion
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Sidebar */}
          <div className="col-span-1">
            <h3 className="hidden md:block text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">Categories</h3>
            <ul className="flex overflow-x-auto pb-2 md:pb-0 space-x-2 md:space-x-0 md:space-y-2 md:block whitespace-nowrap">
              <li><a href="#" onClick={handleDeadLink} className="text-white bg-zinc-800 px-3 py-1.5 rounded-md block text-sm">All Discussions</a></li>
              <li><a href="#" onClick={handleDeadLink} className="text-zinc-400 hover:text-white px-3 py-1.5 rounded-md block text-sm transition-colors">Announcements</a></li>
              <li><a href="#" onClick={handleDeadLink} className="text-zinc-400 hover:text-white px-3 py-1.5 rounded-md block text-sm transition-colors">Support</a></li>
              <li><a href="#" onClick={handleDeadLink} className="text-zinc-400 hover:text-white px-3 py-1.5 rounded-md block text-sm transition-colors">Development</a></li>
              <li><a href="#" onClick={handleDeadLink} className="text-zinc-400 hover:text-white px-3 py-1.5 rounded-md block text-sm transition-colors">Showcase</a></li>
            </ul>
          </div>

          {/* Main Discussion List */}
          <div className="md:col-span-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              {/* Desktop Header */}
              <div className="hidden md:flex border-b border-zinc-800 p-4 bg-zinc-900/50 text-sm text-zinc-400">
                <div className="flex-1">Topic</div>
                <div className="w-32 text-center">Category</div>
                <div className="w-24 text-center">Replies</div>
                <div className="w-32 text-right">Activity</div>
              </div>
              
              <div className="divide-y divide-zinc-800">
                {discussions.map((thread) => (
                  <div key={thread.id} className="p-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-0 hover:bg-zinc-800/50 transition-colors">
                    <div className="flex-1">
                      <Link href={`/community/${thread.id}`} className="text-base md:text-lg font-medium hover:text-blue-400 transition-colors block mb-1 md:mb-0">
                        {thread.title}
                      </Link>
                      <div className="text-xs md:text-sm text-zinc-500 mt-1">
                        Started by <span className="text-zinc-300">{thread.author}</span>
                      </div>
                    </div>
                    
                    {/* Mobile Meta (Category, Replies, Time) */}
                    <div className="flex md:hidden items-center justify-between mt-2">
                      <span className="inline-block px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300">
                        {thread.category}
                      </span>
                      <div className="flex items-center gap-4 text-xs text-zinc-500">
                        <span>{thread.replies} replies</span>
                        <span>{thread.time}</span>
                      </div>
                    </div>

                    {/* Desktop Meta */}
                    <div className="hidden md:block w-32 text-center">
                      <span className="inline-block px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-300">
                        {thread.category}
                      </span>
                    </div>
                    <div className="hidden md:block w-24 text-center text-zinc-400">
                      {thread.replies}
                    </div>
                    <div className="hidden md:block w-32 text-right text-sm text-zinc-500">
                      {thread.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
