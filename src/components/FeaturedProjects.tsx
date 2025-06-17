'use client';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      image: 'https://trunghuymarketing.com/wp-content/uploads/2024/12/cover-3.jpg',
      title: "Nha Khoa Tâm Việt",
      description: "Chăm sóc fanpage và chạy quảng cáo facebook cho thương hiệu Nha Khoa Tâm Việt tại TP HCM",
      services: ["Chăm Sóc Fanpage", "Quảng Cáo Facebook"]
    },
    {
      id: 2,
      image: 'https://trunghuymarketing.com/wp-content/uploads/2024/12/cover-4-2048x777.jpg',
      title: "AFFI - Giải Pháp Affiliate",
      description: "Chăm sóc fanpage và chạy quảng cáo facebook cho thương hiệu AFFI Marketing tại TP Đà Nẵng",
      services: ["Chăm Sóc Fanpage", "Quảng Cáo Facebook"]
    },
    {
      id: 3,
      image: 'https://trunghuymarketing.com/wp-content/uploads/2024/12/ford-duc-duy.jpg',
      title: "Ford gia định - Đức duy",
      description: "Chăm sóc fanpage và chạy quảng cáo facebook cho thương hiệu ô tô Ford tại TP HCM",
      services: ["Chăm Sóc Fanpage", "Quảng Cáo Facebook"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-pink-50">
      <div className="container mx-auto max-w-7xl px-4 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-xl tracking-tight uppercase relative inline-block" style={{letterSpacing: 1}}>
            <span className="pr-2" style={{background: 'linear-gradient(90deg, #ff3c3c 40%, #ff7b7b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 900}}>DỰ ÁN</span>
            <span className="text-pink-500">NỔI BẬT</span>
          </h2>
          <button className="bg-gradient-to-r from-red-600 to-pink-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg border-none hover:scale-105 hover:from-pink-500 hover:to-red-600 transition-all text-lg flex items-center gap-2">
            Xem Tất Cả <span className="text-2xl">→</span>
          </button>
        </div>
        <div className="rounded-3xl bg-white/80 shadow-2xl p-6 md:p-10 border border-blue-100 backdrop-blur-sm relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 2 }
            }}
            className="!pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: '0 12px 40px 0 rgba(255,0,80,0.10)' }}
                  className="bg-white rounded-3xl shadow-2xl border-2 border-transparent group overflow-hidden flex flex-col h-full transition-all duration-300 relative hover:border-gradient-to-r hover:from-red-400 hover:to-pink-400"
                  style={{ minHeight: 420 }}
                >
                  <div className="relative w-full h-52 md:h-60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover w-full h-full rounded-t-3xl group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent z-10 rounded-b-3xl" />
                  </div>
                  <div className="p-7 flex flex-col flex-1 z-20">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-1 h-6 bg-gradient-to-b from-red-500 to-pink-400 rounded-full inline-block" />
                      <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-pink-600 transition-all drop-shadow-sm">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-neutral-700 mb-4 leading-relaxed text-base md:text-lg line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {project.services.map((service, index) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-red-500 to-pink-400 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:from-pink-500 hover:to-red-500 transition-all cursor-pointer border-2 border-white/60"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 