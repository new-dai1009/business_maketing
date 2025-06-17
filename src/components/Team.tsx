'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nguyễn Bảo Đại",
      position: "CEO & Founder",
      image: "https://i.postimg.cc/j5tDdKY5/bd.jpg",
      description: "Hơn 10 năm kinh nghiệm trong lĩnh vực Marketing và Digital Marketing"
    },
    {
      id: 2,
      name: "Trần Văn A",
      position: "Creative Director",
      image: "https://i.postimg.cc/j5tDdKY5/bd.jpg",
      description: "Chuyên gia thiết kế với hơn 8 năm kinh nghiệm trong lĩnh vực Branding"
    },
    {
      id: 3,
      name: "Lê Văn A",
      position: "Digital Marketing Manager",
      image: "https://i.postimg.cc/j5tDdKY5/bd.jpg",
      description: "Chuyên gia Digital Marketing với nhiều dự án thành công"
    },
    {
      id: 4,
      name: "Nguyễn Văn C",
      position: "Content Manager",
      image: "https://i.postimg.cc/j5tDdKY5/bd.jpg",
      description: "Chuyên gia Content Marketing với khả năng sáng tạo nội dung độc đáo"
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
    <section className="py-20 bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">ĐỘI NGŨ CHUYÊN GIA</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Đội ngũ chuyên gia giàu kinh nghiệm, tận tâm và sáng tạo của chúng tôi luôn sẵn sàng 
            đồng hành cùng doanh nghiệp của bạn trên con đường phát triển thương hiệu.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
                <div className="mt-4 flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            Xem thêm
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 