'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🎨',
      title: "Branding",
      items: ["Ấn phẩm truyền thông", "Bộ nhận diện thương hiệu", "Dự án tiêu biểu"]
    },
    {
      id: 2,
      icon: '🌐',
      title: "SEO - Website",
      items: ["Thiết kế Website", "SEO Top Google", "Quản trị Website"]
    },
    {
      id: 3,
      icon: '🎬',
      title: "Media Studio",
      items: ["Photography", "TVC", "Xây kênh Tik Tok"]
    },
    {
      id: 4,
      icon: '📢',
      title: "Digital Ads",
      items: ["Quảng Cáo Facebook", "Quảng Cáo Google", "Quảng Cáo TikTok"]
    },
    {
      id: 5,
      icon: '📰',
      title: "Truyền thông Báo chí",
      items: ["Booking KOL/KOC", "Booking Báo chí", "Chăm sóc Fanpage"]
    }
  ];

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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        bounce: 0.3
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Left: Title, desc, image */}
        <div className="md:w-1/2 w-full flex flex-col gap-6 items-start justify-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight relative inline-block text-gray-900"
            style={{letterSpacing: 1}}
          >
            <span className="relative z-10">CHÚNG TÔI LÀM GÌ</span>
            <span className="absolute left-1/2 -bottom-2 w-2/3 h-2 bg-blue-200 rounded-full -translate-x-1/2 z-0" />
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-700 max-w-xl text-lg leading-relaxed mb-2"
          >
            Gần 10 năm kinh nghiệm đào tạo, huấn luyện thực chiến các kế hoạch Marketing, chúng tôi hướng đến trở thành công ty Marketing đa quốc gia. Cung cấp giải pháp Marketing toàn diện giúp các doanh nghiệp Việt Nam vươn xa ra toàn cầu.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="https://i.postimg.cc/CM4bTn08/digitalmarketing.webp"
              alt="Digital Marketing"
              width={600}
              height={350}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </div>
        {/* Right: Services grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(0, 68, 255, 0.10)' }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col gap-3 border border-transparent hover:border-blue-200 group transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-blue-500">{String(idx+1).padStart(2, '0')}</span>
                <span className="text-lg font-bold text-gray-800 group-hover:text-blue-700 transition-all">{service.title}</span>
              </div>
              <ul className="divide-y divide-gray-100">
                {service.items.map((item, index) => (
                  <li key={index} className="flex items-center justify-between py-2 text-gray-700 group-hover:text-blue-700 transition-all">
                    <span>{item}</span>
                    <span className="text-xl text-blue-300 group-hover:text-blue-600 transition-all">→</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 