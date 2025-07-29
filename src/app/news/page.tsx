"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-red-50">
      <Header />
      <section className="pt-32 pb-16 px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-6xl font-bold font-sans text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-pink-500 leading-[1.6] min-h-[90px] px-2 w-full py-6"
        >
          TIN TỨC & KIẾN THỨC MARKETING
        </motion.h1>
        <p className="text-center text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Cập nhật xu hướng, kiến thức mới nhất về marketing, truyền thông, quảng cáo giúp doanh nghiệp phát triển vượt trội.
        </p>
        {/* Card lớn đầu trang */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="group bg-white rounded-3xl shadow-2xl border-2 border-red-300 overflow-hidden flex flex-col md:flex-row cursor-pointer hover:scale-[1.02] hover:shadow-pink-200/60 transition-all mb-10"
        >
          <div className="relative w-full md:w-2/5 h-64 md:h-80">
            <Image
              src={newsData[0].image}
              alt={newsData[0].title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="flex-1 flex flex-col justify-between p-8">
            <span className="inline-block mb-2 bg-gradient-to-r from-red-100 to-pink-100 text-xs font-bold text-red-500 px-3 py-1 rounded-full shadow">
              {newsData[0].category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
              {newsData[0].title}
            </h2>
            <button className="mt-2 w-max bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow hover:from-pink-500 hover:to-red-600 transition-all text-lg">
              Đọc tiếp
            </button>
          </div>
        </motion.div>
        {/* Các card nhỏ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.slice(1).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, boxShadow: '0 8px 32px 0 rgba(255,0,80,0.10)' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl border-2 border-transparent hover:border-red-300 transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
            >
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <span className="absolute top-3 left-3 bg-gradient-to-r from-red-100 to-pink-100 text-xs font-bold text-red-500 px-3 py-1 rounded-full shadow">
                  {item.category}
                </span>
              </div>
              <div className="flex-1 flex flex-col justify-between p-5">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors line-clamp-2">
                  {item.title}
                </h2>
                <button className="mt-4 w-max bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-2 rounded-full font-bold shadow hover:from-pink-500 hover:to-red-600 transition-all">
                  Đọc tiếp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
} 