'use client';

import { useEffect, useState } from 'react';
import { createClient } from '../lib/supabase';
import type { User } from '@supabase/supabase-js';

export default function AuthButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [sendingLink, setSendingLink] = useState(false);
  const [linkSent, setLinkSent] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSendingLink(true);
    
    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/community`,
      },
    });
    
    setLinkSent(true);
    setSendingLink(false);
  };

  const handleAnonymous = async () => {
    setSendingLink(true);
    await supabase.auth.signInAnonymously();
    setShowModal(false);
    setSendingLink(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  if (loading) return null;

  if (user) {
    const isAnonymous = user.is_anonymous;
    const displayName = isAnonymous ? 'Anonymous User' : (user.user_metadata?.user_name || user.email?.split('@')[0] || 'User');
    
    return (
      <div className="flex items-center gap-3">
        {user.user_metadata?.avatar_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={user.user_metadata.avatar_url}
            alt=""
            className="w-7 h-7 rounded-full"
          />
        ) : (
          <div className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium text-zinc-400">
            {displayName.charAt(0).toUpperCase()}
          </div>
        )}
        <span className="text-sm text-zinc-400 hidden sm:inline">
          {displayName}
        </span>
        <button
          onClick={handleLogout}
          className="text-xs text-zinc-500 hover:text-white transition-colors"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-sm hover:bg-zinc-700 transition-colors"
      >
        Sign in to post
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md p-6 relative">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-xl font-bold mb-2">Join the Community</h2>
            <p className="text-sm text-zinc-400 mb-6">
              Sign in to post, vote, and reply to discussions.
            </p>

            {linkSent ? (
              <div className="text-center py-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                <p className="text-white font-medium mb-1">Check your email</p>
                <p className="text-sm text-zinc-400">We sent a magic link to {email}</p>
              </div>
            ) : (
              <form onSubmit={handleMagicLink} className="space-y-4 mb-6">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={sendingLink || !email}
                  className="w-full px-4 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors disabled:opacity-50"
                >
                  {sendingLink ? 'Sending...' : 'Send Magic Link'}
                </button>
              </form>
            )}

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-zinc-900 px-2 text-zinc-500">Or continue without email</span>
              </div>
            </div>

            <button
              onClick={handleAnonymous}
              disabled={sendingLink}
              className="w-full px-4 py-3 bg-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-700 transition-colors disabled:opacity-50"
            >
              Post Anonymously
            </button>
          </div>
        </div>
      )}
    </>
  );
}
