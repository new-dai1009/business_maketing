'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white shadow-md z-50"
    >
      <div className="container">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/" className="text-2xl font-bold text-blue-600">
              TRUNG HUY MARKETING
            </Link>
          </motion.div>
          
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex space-x-8"
          >
            <Link href="/" className="header-link">Trang chủ</Link>
            <Link href="/about" className="header-link">Về chúng tôi</Link>
            <Link href="/marketing" className="header-link">Marketing</Link>
            <Link href="/projects" className="header-link">Dự án</Link>
            <Link href="/news" className="header-link">Tin tức</Link>
            <Link href="/contact" className="header-link">Liên hệ</Link>
          </motion.nav>

          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Nhận tư vấn
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 