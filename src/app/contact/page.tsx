"use client";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      <section className="pt-32 pb-16 px-4 md:px-0">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-6xl font-bold font-sans text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 leading-[1.6] min-h-[90px] px-2 w-full py-6"
        >
          LIÊN HỆ VỚI CHÚNG TÔI
        </motion.h1>
        <p className="text-center text-lg md:text-xl text-gray-700 mb-12 max-w-2xl mx-auto">
          Đội ngũ Trung Huy Marketing luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy gửi thông tin, chúng tôi sẽ phản hồi nhanh nhất!
        </p>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form liên hệ */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col gap-5 border-2 border-blue-100"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); alert('Cảm ơn bạn đã liên hệ!'); }}
          >
            <label className="font-semibold text-gray-700">Họ và tên
              <input type="text" required className="mt-2 w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none transition" placeholder="Nhập họ tên của bạn" />
            </label>
            <label className="font-semibold text-gray-700">Email
              <input type="email" required className="mt-2 w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none transition" placeholder="Nhập email" />
            </label>
            <label className="font-semibold text-gray-700">Số điện thoại
              <input type="tel" required className="mt-2 w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none transition" placeholder="Nhập số điện thoại" />
            </label>
            <label className="font-semibold text-gray-700">Nội dung liên hệ
              <textarea required rows={4} className="mt-2 w-full px-4 py-3 rounded-xl border border-blue-200 focus:ring-2 focus:ring-blue-400 outline-none transition resize-none" placeholder="Nhập nội dung cần tư vấn, hỗ trợ..."></textarea>
            </label>
            <button type="submit" className="mt-4 bg-gradient-to-r from-blue-600 to-pink-500 text-white px-8 py-3 rounded-full font-bold shadow hover:from-pink-500 hover:to-blue-600 transition-all text-lg">
              Gửi liên hệ
            </button>
          </motion.form>
          {/* Thông tin liên hệ */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center gap-6 bg-gradient-to-br from-blue-100 via-white to-pink-100 rounded-3xl p-8 border-2 border-blue-50 shadow-xl"
          >
            <div>
              <div className="text-xl font-bold text-blue-700 mb-2">Trung Huy Marketing</div>
              <div className="text-gray-700">Địa chỉ: 123 Đường Marketing, Quận 1, TP.HCM</div>
              <div className="text-gray-700">Hotline: <a href="tel:0901234567" className="text-blue-600 font-semibold hover:underline">0901 234 567</a></div>
              <div className="text-gray-700">Email: <a href="mailto:info@trunghuymarketing.com" className="text-blue-600 font-semibold hover:underline">info@trunghuymarketing.com</a></div>
              <div className="text-gray-700">Website: <a href="https://trunghuymarketing.com" className="text-blue-600 font-semibold hover:underline">trunghuymarketing.com</a></div>
            </div>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-pink-500 transition"><svg width="22" height="22" fill="currentColor"><path d="M20.9 3.6c-.8.4-1.6.7-2.5.8.9-.5 1.6-1.4 2-2.3-.9.5-1.8.9-2.8 1.1C16 2.4 15 2 13.9 2c-2.1 0-3.7 2-3.2 4-.1 0-.2 0-.3-.1C7.1 5.7 4.8 4.4 3.1 2.5c-.4.7-.6 1.4-.6 2.2 0 1.5.8 2.8 2 3.5-.7 0-1.4-.2-2-.5 0 2.1 1.5 3.8 3.5 4.2-.4.1-.8.2-1.2.2-.3 0-.6 0-.8-.1.6 1.7 2.3 2.9 4.3 2.9-1.6 1.2-3.6 2-5.7 2-.4 0-.8 0-1.2-.1C2.7 19.1 5.1 20 7.7 20c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2-2.1z"/></svg></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-pink-500 transition"><svg width="22" height="22" fill="currentColor"><path d="M21.8 6.2c-.2-.8-.8-1.4-1.6-1.6C18.2 4 11 4 11 4s-7.2 0-9.2.6c-.8.2-1.4.8-1.6 1.6C0 8.2 0 11 0 11s0 2.8.6 4.8c.2.8.8 1.4 1.6 1.6C2.8 18 11 18 11 18s7.2 0 9.2-.6c.8-.2 1.4-.8 1.6-1.6.6-2 .6-4.8.6-4.8s0-2.8-.6-4.8zM8.8 14.3V7.7l6.4 3.3-6.4 3.3z"/></svg></a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-pink-500 transition"><svg width="22" height="22" fill="currentColor"><path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V8.7h3.4v1.6h.1c.5-.9 1.7-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.4zM5.1 7.1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm1.8 13.3H3.3V8.7h3.6v11.7z"/></svg></a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 