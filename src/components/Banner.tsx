'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Banner = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Slideshow images for right blur (demo)
  const rightTopImages = [
    'https://i.postimg.cc/5yPHHv9k/banner-1.png',
    'https://i.postimg.cc/CM4bTn08/digitalmarketing.webp',
    'https://i.postimg.cc/sfG4kgX9/banner-webdiep.png',
  ];
  const rightBottomImages = [
    'https://i.postimg.cc/CM4bTn08/digitalmarketing.webp',
    'https://i.postimg.cc/5yPHHv9k/banner-1.png',
    'https://i.postimg.cc/sfG4kgX9/banner-webdiep.png',
  ];
  const [topIdx, setTopIdx] = useState(0);
  const [botIdx, setBotIdx] = useState(0);
  useEffect(() => {
    const topTimer = setInterval(() => setTopIdx(i => (i + 1) % rightTopImages.length), 3500);
    const botTimer = setInterval(() => setBotIdx(i => (i + 1) % rightBottomImages.length), 4200);
    return () => { clearInterval(topTimer); clearInterval(botTimer); };
  }, []);

  return (
    <motion.section 
      className="relative w-full h-[500px] overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background blurred images left & right */}
      <div className="absolute inset-0 flex w-full h-full pointer-events-none select-none">
        {/* Left blurred */}
        <div className="relative h-full w-[25%]">
          <Image
            src="https://i.postimg.cc/5yPHHv9k/banner-1.png"
            alt="Banner blur left"
            fill
            className="object-cover w-full h-full blur-lg brightness-50"
            style={{objectPosition: 'left'}}
            priority
            quality={60}
          />
        </div>
        {/* Center main image */}
        <div className="relative h-full w-[50%] flex items-center justify-center">
          <motion.div 
            className="w-full h-full flex items-center justify-center"
            variants={imageVariants}
          >
            <Image
              src="https://i.postimg.cc/5yPHHv9k/banner-1.png"
              alt="Banner"
              fill
              className="object-contain w-full h-full bg-black"
              priority
              quality={100}
            />
          </motion.div>
        </div>
        {/* Right blurred */}
        <div className="relative h-full w-[25%] flex flex-col">
          {/* Nửa trên: slideshow */}
          <div className="relative h-1/2 w-full flex items-center justify-center border-b border-white/20 overflow-hidden">
            {rightTopImages.map((img, idx) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, y: idx < topIdx ? -40 : 40 }}
                animate={{
                  opacity: idx === topIdx ? 1 : 0,
                  y: idx === topIdx ? 0 : idx < topIdx ? -40 : 40
                }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
                style={{zIndex: idx === topIdx ? 2 : 1}}
              >
                <Image
                  src={img}
                  alt={`Banner blur right top ${idx}`}
                  fill
                  className="object-cover w-full h-full"
                  style={{objectPosition: 'right top'}}
                  priority={idx === topIdx}
                  quality={60}
                />
              </motion.div>
            ))}
          </div>
          {/* Nửa dưới: slideshow */}
          <div className="relative h-1/2 w-full flex items-center justify-center overflow-hidden">
            {rightBottomImages.map((img, idx) => (
              <motion.div
                key={img}
                initial={{ opacity: 0, x: idx < botIdx ? 40 : -40 }}
                animate={{
                  opacity: idx === botIdx ? 1 : 0,
                  x: idx === botIdx ? 0 : idx < botIdx ? 40 : -40
                }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full"
                style={{zIndex: idx === botIdx ? 2 : 1}}
              >
                <Image
                  src={img}
                  alt={`Banner blur right bottom ${idx}`}
                  fill
                  className="object-cover w-full h-full"
                  style={{objectPosition: 'right bottom'}}
                  priority={idx === botIdx}
                  quality={60}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      {/* Overlay gradient chỉ che 40% bên trái */}
      <motion.div 
        className="absolute left-0 top-0 h-full z-10" 
        style={{ width: '40%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="w-full h-full bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
      </motion.div>
      {/* Content */}
      <div className="absolute left-0 top-0 h-full z-20" style={{width: '25%', overflow: 'hidden'}}>
        <div className="w-full h-full flex items-center">
          <motion.div
            className="w-full py-20 pl-6 md:pl-12 text-left flex flex-col justify-center items-start h-full"
            variants={containerVariants}
          >
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl font-extrabold mb-8 leading-snug text-white text-left tracking-tight drop-shadow-2xl font-sans"
              style={{
                textShadow: '0 6px 32px rgba(0,0,0,0.45), 0 1px 0 #fff',
                WebkitTextStroke: '1px rgba(0,0,0,0.10)'
              }}
            >
              Nâng Tầm <span className="text-blue-300">Thương Hiệu</span> <br />Của Bạn
            </motion.h2>
            <motion.p
              variants={textVariants}
              className="text-base md:text-lg mb-10 text-white leading-relaxed drop-shadow-lg text-left font-sans"
              style={{textShadow: '0 2px 12px rgba(0,0,0,0.32)'}}
            >
              Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết mang đến <br className="hidden md:block" />
              những giải pháp marketing toàn diện, giúp doanh nghiệp của bạn phát triển bền vững và vươn xa.
            </motion.p>
            <motion.div
              variants={containerVariants}
              className="flex gap-4 justify-start mt-2"
            >
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full text-base md:text-lg font-bold uppercase tracking-wide border-2 border-white/60 hover:bg-white/20 hover:text-blue-100 transition-all duration-200 shadow"
              >
                Tìm Hiểu Thêm
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Banner; 