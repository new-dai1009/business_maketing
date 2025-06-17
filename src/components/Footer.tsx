'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-gray-900 text-white py-16"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">CÔNG TY CỔ PHẦN ĐẦU TƯ TRUNG HUY</h3>
            <p className="text-gray-400">
              Trụ sở chính: Lô A4 08 Nguyễn Sinh Sắc, Phường Hoà Minh, Quận Liên Chiểu, Đà Nẵng.
            </p>
            <p className="text-gray-400 mt-2">
              Chi nhánh Đà Nẵng: 134 Đường 30/4, Hoà Cường Bắc, Hải Châu, Đà Nẵng
            </p>
            <p className="text-gray-400 mt-2">
              Email: Trunghuygroup.marketing@gmail.com
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="footer-link">Digital Ads</Link></li>
              <li><Link href="#" className="footer-link">Media Studio</Link></li>
              <li><Link href="#" className="footer-link">Truyền thông Báo chí</Link></li>
              <li><Link href="#" className="footer-link">SEO - Website</Link></li>
              <li><Link href="#" className="footer-link">Branding</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Trợ giúp khách hàng</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="footer-link">Chính sách và quy định chung</Link></li>
              <li><Link href="#" className="footer-link">Chính sách bảo mật thông tin</Link></li>
              <li><Link href="#" className="footer-link">Hình thức thanh toán</Link></li>
              <li><Link href="#" className="footer-link">Chính sách bảo hành</Link></li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Tư vấn (24/7): 0935.7777.69</li>
              <li className="text-gray-400">Hotline: 0935.7777.69</li>
              <li><Link href="#" className="footer-link">Tuyển dụng</Link></li>
            </ul>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 flex space-x-4"
            >
              <Link href="#" className="footer-link">Facebook</Link>
              <Link href="#" className="footer-link">Youtube</Link>
              <Link href="#" className="footer-link">Tiktok</Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>Copyright 2025 Trunghuymarketing.com | All Rights Reserved</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer; 