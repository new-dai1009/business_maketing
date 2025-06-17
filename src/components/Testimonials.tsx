'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa6';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const testimonials = [
  {
    name: 'Quốc Huy',
    position: 'GĐ AT Group',
    avatar: 'https://trunghuymarketing.com/wp-content/uploads/2024/12/khach-hang-nhan-xet-2.jpg',
    content: 'Tôi đã đăng ký gói thiết kế website và SEO từ khóa tại Trung Huy Marketing. Đội ngũ nhân sự có chuyên môn cao, luôn theo sát chiến dịch. Kết quả đạt được của chiến dịch thành công hơn tôi mong đợi. Cảm ơn Trung Huy Marketing rất nhiều',
    rating: 5
  },
  {
    name: 'Thùy Trang',
    position: 'Thương hiệu thời trang',
    avatar: 'https://trunghuymarketing.com/wp-content/uploads/2024/12/kh-6.png',
    content: 'Sau khi sử dụng dịch vụ Marketing Tổng Thể của Trung Huy Marketing. Tôi rất hài lòng về đội ngũ làm việc chuyên nghiệp, mang lại kết quả ngay trong tháng đầu tiên. Kết thúc chiến dịch chúng tôi đã vượt các mục tiêu đề ra. Cảm ơn đội ngũ rất nhiều',
    rating: 5
  },
  {
    name: 'Ngọc Ánh',
    position: 'CEO Trung Tâm Đào Tạo',
    avatar: 'https://trunghuymarketing.com/wp-content/uploads/2024/12/kh-3.jpg',
    content: 'Chị từng hợp tác rất nhiều Agency và cá nhân chuyên nghiệp. Tuy nhiên, Trung Huy đã để lại cho chị ấn tượng vì chiến dịch rất hiệu quả. Quy trình và thực thi rất bài bản nên chị vô cùng yên tâm. Hy vọng sắp tới sẽ kết hợp nhiều hơn với Trung Huy',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 via-white to-blue-50">
      <div className="container mx-auto max-w-6xl px-4">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-pink-500 tracking-tight uppercase"
          style={{
            letterSpacing: '0.04em',
            fontWeight: 900
          }}
        >
          KHÁCH HÀNG NÓI GÌ VỀ CHÚNG TÔI
        </h2>
        <p className="text-gray-500 mb-12 text-center text-lg max-w-2xl mx-auto">Trung Huy Marketing giúp nhiều doanh nghiệp phát triển vượt bậc</p>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={false}
          autoplay={{
            delay: 3500,
            reverseDirection: true,
            disableOnInteraction: false
          }}
          loop={true}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 }
          }}
          className="pb-20"
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative bg-white/80 backdrop-blur-md rounded-3xl border-2 border-transparent group shadow-2xl p-10 flex flex-col h-full transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(255,0,80,0.10)] hover:border-gradient-to-r hover:from-red-400 hover:to-pink-400">
                <div className="flex items-center gap-5 mb-7">
                  <div className="relative w-20 h-20">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-400 via-pink-400 to-orange-300 p-1">
                      <Image src={item.avatar} alt={item.name} width={80} height={80} className="rounded-full object-cover border-4 border-white shadow-xl w-20 h-20" />
                    </div>
                  </div>
                  <div>
                    <div className="font-extrabold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-500 mb-1 drop-shadow">
                      {item.name}
                    </div>
                    <div className="text-gray-400 text-sm font-medium">{item.position}</div>
                  </div>
                </div>
                <div className="flex-1 relative mb-7">
                  <span className="absolute -top-8 left-0 text-7xl text-pink-100 font-serif select-none leading-none z-0">“</span>
                  <p className="relative z-10 text-gray-700 italic text-lg md:text-xl leading-relaxed font-medium">
                    {item.content}
                  </p>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl md:text-3xl drop-shadow">★</span>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials; 