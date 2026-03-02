'use client';

import { useEffect, useState } from 'react';

type ToastMessage = { id: number; text: string };
let toastId = 0;

const listeners: Set<(msg: ToastMessage) => void> = new Set();

export function showToast(text: string) {
  const msg = { id: ++toastId, text };
  listeners.forEach((fn) => fn(msg));
}

export default function Toast() {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const handler = (msg: ToastMessage) => {
      setMessages((prev) => [...prev, msg]);
      setTimeout(() => {
        setMessages((prev) => prev.filter((m) => m.id !== msg.id));
      }, 2500);
    };
    listeners.add(handler);
    return () => { listeners.delete(handler); };
  }, []);

  if (messages.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-2">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-white shadow-lg animate-[fadeInUp_0.2s_ease-out]"
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
