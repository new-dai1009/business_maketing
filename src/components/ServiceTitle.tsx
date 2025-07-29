'use client';
import { motion } from 'framer-motion';

export default function ServiceTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-3xl md:text-6xl font-bold font-sans text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 leading-[1.6] min-h-[90px] px-2 w-full py-6"
    >
      {children}
    </motion.h1>
  );
} 