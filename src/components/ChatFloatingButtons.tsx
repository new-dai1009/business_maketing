import { FaFacebookMessenger, FaRobot } from 'react-icons/fa';
import React, { useState, useRef, useEffect } from 'react';
import type { ElementType } from 'react';

const MESSENGER_LINK = 'https://m.me/trunghuymarketing';
const ZALO_LINK = 'https://zalo.me/0900000000';
const CHATBOT_LINK = 'AIzaSyCtD1TLPeX8byldgPy8s5010XRIOJxXJFY';

function ZaloSVGIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="20" fill="#008EEA" />
      <text x="50%" y="55%" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Arial, Helvetica, sans-serif" dy=".3em">Zalo</text>
    </svg>
  );
}

const DUMMY_HISTORY = [
  { from: 'bot', text: 'Xin chào! Tôi là chatbot AI Gemini, bạn cần hỗ trợ gì?' },
];

export default function ChatFloatingButtons() {
  const MessengerIcon = FaFacebookMessenger as ElementType;
  const BotIcon = FaRobot as ElementType;
  const [showChat, setShowChat] = useState(false);
  const [history, setHistory] = useState(DUMMY_HISTORY);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showChat && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showChat, history]);

  async function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    if (!input.trim()) return;
    setHistory(h => [...h, { from: 'user', text: input }]);
    const userMsg = input;
    setInput('');
    setHistory(h => [...h, { from: 'bot', text: 'Đang trả lời...' }]);
    try {
      const res = await fetch('/api/gemini-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userMsg }),
      });
      const data = await res.json();
      setHistory(h => [
        ...h.slice(0, -1), // remove 'Đang trả lời...'
        { from: 'bot', text: data.text || 'Xin lỗi, tôi không thể trả lời lúc này.' }
      ]);
    } catch {
      setHistory(h => [
        ...h.slice(0, -1),
        { from: 'bot', text: 'Có lỗi xảy ra, vui lòng thử lại.' }
      ]);
    }
  }

  return (
    <>
      <div className="fixed z-[9999] flex flex-col gap-4 bottom-6 right-6 items-end">
        {/* Messenger */}
        <a
          href={MESSENGER_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-lg hover:scale-110 transition-transform animate-shake animate-pulse-glow"
          style={{ animationDelay: '0s' }}
          title="Chat Facebook Messenger"
        >
          <span className="absolute inset-0 rounded-full pointer-events-none animate-pulse-glow" style={{ animationDelay: '0s' }} />
          <MessengerIcon className="text-white text-3xl relative z-10" />
        </a>
        {/* Zalo (ở giữa, dùng SVG logo) */}
        <a
          href={ZALO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg hover:scale-110 transition-transform animate-shake animate-pulse-glow"
          style={{ animationDelay: '0.2s' }}
          title="Chat Zalo"
        >
          <span className="absolute inset-0 rounded-full pointer-events-none animate-pulse-glow" style={{ animationDelay: '0.2s' }} />
          <ZaloSVGIcon width={32} height={32} className="relative z-10" />
        </a>
        {/* Chatbot */}
        <button
          type="button"
          onClick={() => setShowChat(s => !s)}
          className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg hover:scale-110 transition-transform animate-shake animate-pulse-glow focus:outline-none"
          style={{ animationDelay: '0.4s' }}
          title="Chatbot hỗ trợ"
        >
          <span className="absolute inset-0 rounded-full pointer-events-none animate-pulse-glow" style={{ animationDelay: '0.4s' }} />
          <BotIcon className="text-white text-2xl relative z-10" />
        </button>
      </div>
      {/* Chatbox popup */}
      {showChat && (
        <div className="fixed z-[10000] bottom-28 right-6 w-[350px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col animate-fade-in">
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <div className="flex items-center gap-2 font-bold text-blue-700 text-lg">
              <BotIcon className="text-purple-500 text-xl" />
              Gemini Chatbot
            </div>
            <button
              className="text-gray-400 hover:text-red-500 text-xl font-bold px-2 focus:outline-none"
              onClick={() => setShowChat(false)}
              aria-label="Đóng chat"
            >
              ×
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50" style={{ minHeight: 200, maxHeight: 320 }}>
            {history.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-xl px-4 py-2 text-sm max-w-[80%] ${msg.from === 'user' ? 'bg-blue-500 text-white' : 'bg-white border text-gray-800'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} className="flex items-center gap-2 px-4 py-3 border-t bg-white">
            <input
              type="text"
              className="flex-1 rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Nhập tin nhắn..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSend(e); }}
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 font-semibold transition-colors"
            >
              Gửi
            </button>
          </form>
        </div>
      )}
      <style jsx global>{`
        @keyframes shake {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-2px, 2px) rotate(-8deg); }
          40% { transform: translate(-2px, -2px) rotate(8deg); }
          60% { transform: translate(2px, 2px) rotate(-4deg); }
          80% { transform: translate(2px, -2px) rotate(4deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-shake {
          animation: shake 1.5s infinite;
        }
        @keyframes pulse-glow {
          0% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4), 0 0 0 0 rgba(236,72,153,0.2); }
          70% { box-shadow: 0 0 0 12px rgba(59,130,246,0), 0 0 0 24px rgba(236,72,153,0); }
          100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.4), 0 0 0 0 rgba(236,72,153,0.2); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 1.5s infinite;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s;
        }
      `}</style>
    </>
  );
} 