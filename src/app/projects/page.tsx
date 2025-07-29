'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBullhorn, FaFacebookF, FaGoogle, FaTiktok, FaGlobe, FaChartLine, FaLaptopCode } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import type { ElementType } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const PROJECT_CATEGORIES: { key: string; label: string; icon: IconType }[] = [
  {
    key: 'all',
    label: 'Tất cả',
    icon: FaGlobe,
  },
  {
    key: 'tongthe',
    label: 'Marketing tổng thể',
    icon: FaBullhorn,
  },
  {
    key: 'facebook',
    label: 'Quảng cáo Facebook',
    icon: FaFacebookF,
  },
  {
    key: 'google',
    label: 'Quảng cáo Google',
    icon: FaGoogle,
  },
  {
    key: 'tiktok',
    label: 'Quảng cáo TikTok',
    icon: FaTiktok,
  },
  {
    key: 'website',
    label: 'Thiết kế Website',
    icon: FaLaptopCode,
  },
  {
    key: 'seo',
    label: 'SEO top Google',
    icon: FaChartLine,
  },
];

const PROJECTS = [
  {
    id: 1,
    category: 'tongthe',
    title: 'Chiến dịch tổng thể cho ABC Corp',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Triển khai chiến lược marketing đa kênh, tăng trưởng doanh thu 200% trong 1 năm.',
    result: 'Tăng trưởng doanh thu 200%',
    highlight: true,
  },
  {
    id: 2,
    category: 'tongthe',
    title: 'Chiến dịch tổng thể cho ABC Corp',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Triển khai chiến lược marketing đa kênh, tăng trưởng doanh thu 200% trong 1 năm.',
    result: 'Tăng trưởng doanh thu 200%',
    highlight: true,
  },
  {
    id: 22,
    category: 'tongthe',
    title: 'Chiến dịch tổng thể cho ABC Corp',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Triển khai chiến lược marketing đa kênh, tăng trưởng doanh thu 200% trong 1 năm.',
    result: 'Tăng trưởng doanh thu 200%',
    highlight: true,
  },
  {
    id: 222,
    category: 'tongthe',
    title: 'Chiến dịch tổng thể cho ABC Corp',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Triển khai chiến lược marketing đa kênh, tăng trưởng doanh thu 200% trong 1 năm.',
    result: 'Tăng trưởng doanh thu 200%',
    highlight: true,
  },
  {
    id: 2222,
    category: 'tongthe',
    title: 'Chiến dịch tổng thể cho ABC Corp',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Triển khai chiến lược marketing đa kênh, tăng trưởng doanh thu 200% trong 1 năm.',
    result: 'Tăng trưởng doanh thu 200%',
    highlight: true,
  },
  {
    id: 22222,
    category: 'tongthe',
    title: 'Chiến dịch tổng thể cho ABC Corp',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Triển khai chiến lược marketing đa kênh, tăng trưởng doanh thu 200% trong 1 năm.',
    result: 'Tăng trưởng doanh thu 200%',
    highlight: true,
  },

  {
    id: 3,
    category: 'facebook',
    title: 'Quảng cáo Facebook cho Shop XYZ',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Tối ưu quảng cáo Facebook, tăng 300% đơn hàng trong 3 tháng.',
    result: 'Tăng 300% đơn hàng',
    highlight: false,
  },
  {
    id: 3,
    category: 'google',
    title: 'Google Ads cho Công ty DEF',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Chạy Google Ads, giảm 40% chi phí/khách hàng tiềm năng.',
    result: 'Giảm 40% CPA',
    highlight: true,
  },
  {
    id: 4,
    category: 'tiktok',
    title: 'TikTok Ads cho Thương hiệu GHI',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Tạo viral video, tăng 500k followers trong 2 tháng.',
    result: 'Tăng 500k followers',
    highlight: false,
  },
  {
    id: 5,
    category: 'website',
    title: 'Thiết kế website cho Startup JKL',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Thiết kế website chuẩn UX/UI, tăng tỉ lệ chuyển đổi 60%.',
    result: 'Tăng 60% chuyển đổi',
    highlight: false,
  },
  {
    id: 6,
    category: 'seo',
    title: 'SEO top Google cho Công ty MNO',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Đưa 20 từ khóa lên top 3 Google trong 6 tháng.',
    result: '20 từ khóa top 3',
    highlight: true,
  },
  {
    id: 7,
    category: 'seo',
    title: 'SEO top Google cho Công ty MNO',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Đưa 20 từ khóa lên top 3 Google trong 6 tháng.',
    result: '20 từ khóa top 3',
    highlight: true,
  },
  {
    id: 8,
    category: 'seo',
    title: 'SEO top Google cho Công ty MNO',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Đưa 20 từ khóa lên top 3 Google trong 6 tháng.',
    result: '20 từ khóa top 3',
    highlight: true,
  },
  {
    id: 9,
    category: 'seo',
    title: 'SEO top Google cho Công ty MNO',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Đưa 20 từ khóa lên top 3 Google trong 6 tháng.',
    result: '20 từ khóa top 3',
    highlight: true,
  },
  {
    id: 10,
    category: 'seo',
    title: 'SEO top Google cho Công ty MNO',
    image: 'https://trunghuymarketing.com/wp-content/uploads/2025/02/KARMEL.png',
    desc: 'Đưa 20 từ khóa lên top 3 Google trong 6 tháng.',
    result: '20 từ khóa top 3',
    highlight: true,
  },
];

export default function Projects() {
  const [selected, setSelected] = useState('all');
  const filtered = selected === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === selected);

  // Phân loại dự án
  const tongTheProjects = PROJECTS.filter(p => p.category === 'tongthe');
  const facebookProjects = PROJECTS.filter(p => p.category === 'facebook');
  const googleProjects = PROJECTS.filter(p => p.category === 'google');
  const tiktokProjects = PROJECTS.filter(p => p.category === 'tiktok');
  const websiteProjects = PROJECTS.filter(p => p.category === 'website');
  const seoProjects = PROJECTS.filter(p => p.category === 'seo');

  return (
    <main>
      <Header />
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 bg-gradient-to-r from-blue-700/90 to-purple-800/90 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/api/placeholder/1600/500" alt="hero bg" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/80 to-purple-900/80" />
        </div>
        <div className="container text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center justify-center gap-4 mb-4"
          >
            <span className="text-3xl md:text-6xl font-bold font-sans text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-500 to-pink-500 leading-[1.6] min-h-[90px] px-2 w-full py-6">
              DỰ ÁN TIÊU BIỂU
            </span>
          </motion.div>
          <p className="text-xl max-w-2xl mx-auto mb-6 opacity-90">
            Khám phá các dự án nổi bật mà Trung Huy Marketing đã thực hiện cho khách hàng ở nhiều lĩnh vực khác nhau.
          </p>
        </div>
      </section>

      {/* Dự án tổng thể - Chỉ 3 sản phẩm, slider đơn giản */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center flex items-center justify-center gap-3">
            {(() => { const Icon = FaBullhorn as ElementType; return <Icon className="text-2xl text-blue-600 animate-bounce" /> })()}
            Dự án Marketing tổng thể tiêu biểu
          </h2>
          <Swiper
            modules={[Navigation]}
            grabCursor={true}
            navigation
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="w-full max-w-6xl mx-auto"
          >
            {tongTheProjects.slice(0, 3).map(project => {
              const CatIcon = PROJECT_CATEGORIES.find(c => c.key === project.category)?.icon as ElementType | undefined;
              return (
                <SwiperSlide key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border-2 transition-all duration-300 mx-2
                      ${project.highlight ? 'border-blue-500/70' : 'border-gray-100'}`}
                  >
                    {project.highlight && (
                      <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                        Nổi bật
                      </span>
                    )}
                    <div className="h-64 w-full bg-gray-200 relative group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                        {CatIcon && <CatIcon />}
                        {project.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 text-lg">{project.desc}</p>
                      <div className="flex items-center gap-2 mt-auto">
                        <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                          {project.result}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.97 }}
                          className="ml-auto px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold shadow hover:shadow-lg transition-all"
                        >
                          Xem chi tiết
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>

      {/* Các nhóm dự án khác */}
      {[
        { title: 'Dự án Quảng cáo Facebook nổi bật', projects: facebookProjects, icon: FaFacebookF },
        { title: 'Dự án Quảng cáo Google nổi bật', projects: googleProjects, icon: FaGoogle },
        { title: 'Dự án Quảng cáo TikTok nổi bật', projects: tiktokProjects, icon: FaTiktok },
        { title: 'Dự án Thiết kế Website nổi bật', projects: websiteProjects, icon: FaLaptopCode },
        { title: 'Dự án SEO top Google nổi bật', projects: seoProjects, icon: FaChartLine },
      ].map((group, idx) => (
        group.projects.length > 0 && (
          <section key={group.title} className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="container">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-8 flex items-center gap-3">
                {(() => { const Icon = group.icon as ElementType; return <Icon className="text-xl text-blue-600" /> })()}
                {group.title}
              </h2>
              {group.projects.length > 3 ? (
                <Swiper
                  modules={[Navigation]}
                  grabCursor={true}
                  navigation
                  slidesPerView={1}
                  spaceBetween={20}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="w-full max-w-6xl mx-auto"
                >
                  {group.projects.slice(0, 3).map(project => {
                    const CatIcon = PROJECT_CATEGORIES.find(c => c.key === project.category)?.icon as ElementType | undefined;
                    return (
                      <SwiperSlide key={project.id}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.7 }}
                          viewport={{ once: true }}
                          className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border-2 transition-all duration-300 mx-2
                            ${project.highlight ? 'border-blue-500/70' : 'border-gray-100'}`}
                        >
                          {project.highlight && (
                            <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                              Nổi bật
                            </span>
                          )}
                          <div className="h-48 w-full bg-gray-200 relative group">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                          <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                              {CatIcon && <CatIcon />}
                              {project.title}
                            </h3>
                            <p className="text-gray-600 mb-4 flex-1">{project.desc}</p>
                            <div className="flex items-center gap-2 mt-auto">
                              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                                {project.result}
                              </span>
                              <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.97 }}
                                className="ml-auto px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold shadow hover:shadow-lg transition-all"
                              >
                                Xem chi tiết
                              </motion.button>
                            </div>
                          </div>
                        </motion.div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {group.projects.map(project => {
                    const CatIcon = PROJECT_CATEGORIES.find(c => c.key === project.category)?.icon as ElementType | undefined;
                    return (
                      <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(80,80,200,0.16)' }}
                        className={`relative bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col border-2 transition-all duration-300
                          ${project.highlight ? 'border-blue-500/70' : 'border-gray-100'}`}
                      >
                        {project.highlight && (
                          <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                            Nổi bật
                          </span>
                        )}
                        <div className="h-48 w-full bg-gray-200 relative group">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                          <h3 className="text-xl font-bold text-blue-700 mb-2 flex items-center gap-2">
                            {CatIcon && <CatIcon />}
                            {project.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-1">{project.desc}</p>
                          <div className="flex items-center gap-2 mt-auto">
                            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                              {project.result}
                            </span>
                            <motion.button
                              whileHover={{ scale: 1.08 }}
                              whileTap={{ scale: 0.97 }}
                              className="ml-auto px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold shadow hover:shadow-lg transition-all"
                            >
                              Xem chi tiết
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        )
      ))}

      {/* CTA Section giữ nguyên */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/40 via-blue-300/20 to-transparent animate-pulse" />
        <div className="container text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3"
          >
            {(() => { const Icon = FaBullhorn as ElementType; return <Icon className="text-2xl animate-bounce" /> })()}
            Bạn muốn dự án của mình thành công vượt trội?
          </motion.h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Liên hệ với Trung Huy Marketing để nhận tư vấn giải pháp phù hợp và hiệu quả nhất cho doanh nghiệp của bạn.
          </p>
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 shadow-lg transition-colors"
          >
            Nhận tư vấn miễn phí
          </motion.button>
        </div>
      </section>
      <Footer />
    </main>
  );
} 