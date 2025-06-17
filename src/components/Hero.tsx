'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      {/* Blobs background */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 z-0" />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-sky-200 rounded-full blur-3xl opacity-50 z-0" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-100 rounded-full blur-2xl opacity-40 z-0 transform -translate-x-1/2 -translate-y-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 text-gray-900 tracking-tight"
          >
            TRUNG HUY MARKETING
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6"
          >
            Chiến lược thực thi - Giải pháp toàn diện
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed"
          >
            Nâng tầm thương hiệu doanh nghiệp Việt
          </motion.p>
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-sky-400 text-white px-10 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-sky-500 transition-all duration-200 uppercase tracking-wide"
          >
            Xem tất cả
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 