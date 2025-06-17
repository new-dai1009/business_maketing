'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const newsData = [
  {
    id: 1,
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/05/facebook-ads.jpg',
    category: 'KIẾN THỨC FACEBOOK',
    title: 'Tăng Trưởng Thương Hiệu Mạnh Mẽ Với Dịch Vụ Marketing Facebook Chuyên Nghiệp',
  },
  {
    id: 2,
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/05/Dich-vu-marketing-facebook.jpg',
    category: 'KIẾN THỨC FACEBOOK',
    title: 'Facebook Ads là gì? Vai trò của FB Ads trong kinh doanh hiện đại?',
  },
  {
    id: 3,
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/05/TikTok-la-gi.jpg',
    category: 'KIẾN THỨC TIKTOK',
    title: 'Buff follow TikTok – Tăng uy tín, tăng doanh số, chốt đơn dễ hơn',
  },
];

type NewsItem = {
  id: number;
  image: string;
  category: string;
  title: string;
};

type NewsCardProps = {
  item: NewsItem;
  active: boolean;
  prevSlide?: () => void;
  nextSlide?: () => void;
};

export default function NewsUpdates() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? newsData.length - 1 : prev - 1));
  };
  const nextSlide = () => {
    setCurrent((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === newsData.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isPaused]);

  // Helper to get the correct index for left/right cards
  const getIndex = (offset: number) => (current + offset + newsData.length) % newsData.length;

  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-red-50 relative">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-pink-500 drop-shadow-lg tracking-tight uppercase">
        TIN MỚI CẬP NHẬT
      </h2>
      <div className="flex justify-center items-center gap-4 md:gap-8 relative">
        {/* Left card */}
        <div className="hidden md:block opacity-40 scale-90 blur-sm pointer-events-none transition-all duration-500">
          <NewsCard item={newsData[getIndex(-1)]} active={false} />
        </div>
        {/* Center card */}
        <div
          className="z-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <NewsCard item={newsData[current]} active={true} prevSlide={prevSlide} nextSlide={nextSlide} />
        </div>
        {/* Right card */}
        <div className="hidden md:block opacity-40 scale-90 blur-sm pointer-events-none transition-all duration-500">
          <NewsCard item={newsData[getIndex(1)]} active={false} />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-gradient-to-r from-red-600 to-pink-500 text-white px-10 py-3 rounded-xl font-bold shadow-lg hover:scale-105 hover:from-pink-500 hover:to-red-600 transition-all duration-300 flex items-center gap-2 text-lg">
          Xem Tất Cả <span className="text-2xl">&#8594;</span>
        </button>
      </div>
    </section>
  );
}

function NewsCard({ item, active, prevSlide, nextSlide }: NewsCardProps) {
  return (
    <div
      className={`relative bg-white rounded-3xl shadow-2xl p-6 md:p-8 transition-all duration-500 flex flex-col items-center justify-between border-2 ${
        active
          ? 'border-red-400 scale-105 shadow-red-200/80'
          : 'border-transparent scale-95'
      }`} style={{ width: 360, height: 340 }}
    >
      <div className="relative w-full h-44 mb-4 rounded-2xl overflow-hidden shadow-lg">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 360px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
      </div>
      <div className="text-center w-full">
        <div className="inline-block px-3 py-1 mb-2 rounded-full bg-gradient-to-r from-red-100 to-pink-100 text-xs font-bold text-red-500 tracking-wide shadow">
          {item.category}
        </div>
        <div className="text-lg md:text-xl font-semibold text-gray-900 mb-2 leading-snug line-clamp-2">
          {item.title}
        </div>
      </div>
      {active && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-200 rounded-full p-2 shadow-lg hover:bg-red-100 hover:text-red-600 transition-all duration-200 text-2xl"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 border border-gray-200 rounded-full p-2 shadow-lg hover:bg-red-100 hover:text-red-600 transition-all duration-200 text-2xl"
            aria-label="Next"
          >
            &#8594;
          </button>
        </>
      )}
    </div>
  );
} 