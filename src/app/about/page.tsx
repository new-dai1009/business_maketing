"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <section className="pt-36 pb-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight"
          >
            Về Trung Huy Marketing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-2"
          >
            Đối tác chiến lược hàng đầu giúp doanh nghiệp Việt Nam vươn tầm quốc tế.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-5">Câu chuyện của chúng tôi</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Thành lập năm 2018, Trung Huy Marketing khởi đầu với tầm nhìn giúp doanh nghiệp Việt Nam tiếp cận thị trường toàn cầu bằng chiến lược marketing hiệu quả, sáng tạo.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Từ nhóm 5 thành viên, chúng tôi phát triển thành đội ngũ hơn 50 chuyên gia, phục vụ 200+ khách hàng trong và ngoài nước.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mỗi doanh nghiệp đều có câu chuyện riêng. Chúng tôi giúp bạn kể câu chuyện ấy một cách chuyên nghiệp nhất.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="grid grid-cols-2 gap-6 bg-white rounded-2xl shadow-lg p-8 w-full max-w-xs">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
                <div className="text-xs text-gray-500">Khách hàng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">50+</div>
                <div className="text-xs text-gray-500">Chuyên gia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                <div className="text-xs text-gray-500">Dự án thành công</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                <div className="text-xs text-gray-500">Năm kinh nghiệm</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sứ mệnh & Tầm nhìn</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mang lại giá trị thực cho khách hàng bằng giải pháp marketing sáng tạo, hiệu quả và bền vững.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
            >
              <div className="text-blue-600 text-3xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sứ mệnh</h3>
              <p className="text-gray-700">
                Cung cấp giải pháp marketing toàn diện, sáng tạo, giúp doanh nghiệp Việt phát triển bền vững và vươn tầm quốc tế.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-sm"
            >
              <div className="text-purple-600 text-3xl mb-3">🌟</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tầm nhìn</h3>
              <p className="text-gray-700">
                Trở thành đối tác chiến lược hàng đầu trong lĩnh vực marketing tại Việt Nam và Đông Nam Á, được tin tưởng bởi doanh nghiệp lớn nhỏ.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Định hướng mọi hoạt động của chúng tôi
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "💡", title: "Sáng tạo", desc: "Luôn tìm kiếm ý tưởng mới, cách tiếp cận độc đáo cho chiến dịch ấn tượng." },
              { icon: "🤝", title: "Tin cậy", desc: "Cam kết kết quả thực, xây dựng quan hệ lâu dài với khách hàng." },
              { icon: "🚀", title: "Hiệu quả", desc: "Tối ưu ROI, mang lại giá trị tối đa cho khách hàng." },
              { icon: "🌍", title: "Toàn cầu", desc: "Hiểu thị trường quốc tế, giúp doanh nghiệp Việt vươn xa." },
              { icon: "📈", title: "Phát triển", desc: "Không ngừng học hỏi, cập nhật xu hướng mới nhất." },
              { icon: "❤️", title: "Đam mê", desc: "Làm việc với đam mê, nhiệt huyết để biến ý tưởng thành hiện thực." }
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-white border hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-gray-600 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Đội ngũ lãnh đạo</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những người dẫn dắt Trung Huy Marketing phát triển bền vững
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Nguyễn Trung Huy", position: "CEO & Founder", desc: "Hơn 10 năm kinh nghiệm marketing, sáng lập và điều hành Trung Huy Marketing." },
              { name: "Trần Thị Minh", position: "Giám đốc Marketing", desc: "Chuyên gia marketing, từng làm việc tại tập đoàn đa quốc gia." },
              { name: "Lê Văn Nam", position: "Giám đốc Kỹ thuật", desc: "Chuyên gia digital marketing & công nghệ, tối ưu mọi giải pháp." }
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-8 shadow-sm text-center border"
              >
                <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-3xl font-bold shadow-lg">
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{m.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{m.position}</p>
                <p className="text-gray-600 text-sm">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thành tựu & Giải thưởng</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Những dấu mốc nổi bật trên hành trình phát triển
            </p>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { year: "2023", title: "Top 10 Agency Marketing", desc: "Top 10 công ty marketing hàng đầu Việt Nam." },
              { year: "2022", title: "Giải thưởng Sáng tạo", desc: "Chiến dịch marketing sáng tạo nhất năm." },
              { year: "2021", title: "100+ Khách hàng", desc: "Đạt mốc 100 khách hàng thân thiết, hài lòng." },
              { year: "2020", title: "Mở rộng quốc tế", desc: "Bắt đầu cung cấp dịch vụ cho thị trường Đông Nam Á." }
            ].map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: i * 0.07 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white border rounded-xl shadow-sm"
              >
                <div className="text-2xl font-bold text-blue-600 mb-1">{a.year}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{a.title}</h3>
                <p className="text-gray-600 text-sm">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Sẵn sàng đồng hành cùng Trung Huy Marketing?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg mb-8 max-w-xl mx-auto"
          >
            Hãy để chúng tôi giúp bạn xây dựng chiến lược marketing hiệu quả và phát triển thương hiệu vững mạnh.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#"
              className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
            >
              Nhận tư vấn miễn phí
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="/projects"
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition"
            >
              Xem dự án của chúng tôi
            </motion.a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 