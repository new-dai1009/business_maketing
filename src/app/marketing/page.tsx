'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function Marketing() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-6xl font-bold font-sans text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 leading-[1.6] min-h-[90px] px-2 w-full py-6">
              GIẢI PHÁP MARKETING TOÀN DIỆN
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Chúng tôi cung cấp các dịch vụ marketing chuyên nghiệp, 
              giúp doanh nghiệp tăng trưởng bền vững và vươn xa ra toàn cầu
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Dịch vụ Marketing của chúng tôi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Từ chiến lược đến thực thi, chúng tôi đồng hành cùng bạn 
              trong mọi bước của hành trình marketing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Digital Marketing",
                description: "SEO, SEM, Social Media Marketing, Email Marketing và Content Marketing",
                features: ["Tối ưu hóa SEO", "Quảng cáo Google Ads", "Marketing trên mạng xã hội", "Email Marketing"]
              },
              {
                icon: "📈",
                title: "Brand Marketing",
                description: "Xây dựng và phát triển thương hiệu toàn diện",
                features: ["Định vị thương hiệu", "Thiết kế nhận diện", "Chiến lược truyền thông", "Quản lý khủng hoảng"]
              },
              {
                icon: "🌍",
                title: "International Marketing",
                description: "Mở rộng thị trường ra quốc tế",
                features: ["Nghiên cứu thị trường", "Địa phương hóa", "Đối tác quốc tế", "Hậu cần toàn cầu"]
              },
              {
                icon: "📊",
                title: "Data Analytics",
                description: "Phân tích dữ liệu và báo cáo hiệu quả",
                features: ["Tracking & Analytics", "Báo cáo ROI", "Phân tích hành vi", "Tối ưu hóa hiệu suất"]
              },
              {
                icon: "🎨",
                title: "Creative Design",
                description: "Thiết kế sáng tạo và ấn tượng",
                features: ["Logo & Branding", "Website Design", "Print Materials", "Digital Assets"]
              },
              {
                icon: "📱",
                title: "Mobile Marketing",
                description: "Chiến lược marketing cho thiết bị di động",
                features: ["App Marketing", "Mobile SEO", "SMS Marketing", "Location-based Marketing"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Quy trình làm việc
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Chúng tôi tuân thủ quy trình 5 bước để đảm bảo hiệu quả tối đa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "01",
                title: "Phân tích & Nghiên cứu",
                description: "Tìm hiểu thị trường, đối thủ và khách hàng mục tiêu"
              },
              {
                step: "02",
                title: "Chiến lược",
                description: "Xây dựng chiến lược marketing phù hợp với mục tiêu"
              },
              {
                step: "03",
                title: "Thực thi",
                description: "Triển khai các chiến dịch marketing một cách chuyên nghiệp"
              },
              {
                step: "04",
                title: "Theo dõi",
                description: "Giám sát hiệu quả và tối ưu hóa liên tục"
              },
              {
                step: "05",
                title: "Báo cáo",
                description: "Báo cáo kết quả và đề xuất cải tiến"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing Details */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Digital Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Giải pháp marketing số toàn diện cho thời đại công nghệ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-800 mb-6">SEO & SEM</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Tối ưu hóa SEO</h4>
                    <p className="text-gray-600">Cải thiện thứ hạng website trên Google, tăng lưu lượng truy cập tự nhiên</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Google Ads</h4>
                    <p className="text-gray-600">Quảng cáo có trả tiền hiệu quả, tối ưu hóa chi phí và ROI</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Content Marketing</h4>
                    <p className="text-gray-600">Tạo nội dung chất lượng, thu hút và chuyển đổi khách hàng</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Kết quả đạt được</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Tăng traffic</span>
                  <span className="font-bold">+300%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Cải thiện ranking</span>
                  <span className="font-bold">Top 10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Tăng conversion</span>
                  <span className="font-bold">+150%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>ROI trung bình</span>
                  <span className="font-bold">500%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Marketing */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Social Media Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Xây dựng cộng đồng và tương tác với khách hàng trên mạng xã hội
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                platform: "Facebook",
                icon: "📘",
                description: "Quảng cáo và quản lý fanpage chuyên nghiệp",
                features: ["Tạo nội dung hấp dẫn", "Quảng cáo Facebook Ads", "Tương tác với khách hàng", "Phân tích hiệu quả"]
              },
              {
                platform: "Instagram",
                icon: "📷",
                description: "Marketing trực quan và storytelling",
                features: ["Story & Reels", "Influencer Marketing", "Hashtag Strategy", "Visual Content"]
              },
              {
                platform: "LinkedIn",
                icon: "💼",
                description: "Marketing B2B và xây dựng mạng lưới",
                features: ["Content Marketing", "Lead Generation", "Thought Leadership", "Networking"]
              }
            ].map((social, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{social.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{social.platform}</h3>
                <p className="text-gray-600 mb-4">{social.description}</p>
                <ul className="space-y-2">
                  {social.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Gói dịch vụ Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lựa chọn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "5.000.000",
                period: "tháng",
                description: "Phù hợp cho doanh nghiệp nhỏ mới bắt đầu",
                features: [
                  "SEO cơ bản",
                  "Quản lý 2 mạng xã hội",
                  "Content 8 bài/tháng",
                  "Báo cáo hàng tháng",
                  "Hỗ trợ qua email"
                ]
              },
              {
                name: "Professional",
                price: "15.000.000",
                period: "tháng",
                description: "Giải pháp toàn diện cho doanh nghiệp vừa",
                features: [
                  "SEO + Google Ads",
                  "Quản lý 5 mạng xã hội",
                  "Content 20 bài/tháng",
                  "Email Marketing",
                  "Báo cáo hàng tuần",
                  "Hỗ trợ 24/7"
                ],
                popular: true
              },
              {
                name: "Enterprise",
                price: "Liên hệ",
                period: "",
                description: "Giải pháp tùy chỉnh cho doanh nghiệp lớn",
                features: [
                  "Chiến lược marketing toàn diện",
                  "Quản lý tất cả kênh",
                  "Content không giới hạn",
                  "International Marketing",
                  "Báo cáo real-time",
                  "Dedicated Account Manager"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white p-8 rounded-2xl shadow-lg border-2 ${
                  plan.popular ? 'border-blue-500' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Phổ biến nhất
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-blue-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-full font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {plan.name === "Enterprise" ? "Liên hệ tư vấn" : "Chọn gói"}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Sẵn sàng tăng trưởng cùng chúng tôi?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Hãy để chúng tôi giúp bạn xây dựng chiến lược marketing hiệu quả 
              và đạt được mục tiêu kinh doanh
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Nhận tư vấn miễn phí
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Xem case study
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 