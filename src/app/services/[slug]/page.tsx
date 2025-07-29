import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceTitle from '@/components/ServiceTitle';

const SERVICES = [
  {
    slug: 'branding',
    title: 'Branding',
    description: 'Xây dựng thương hiệu mạnh mẽ với bộ nhận diện chuyên nghiệp, ấn phẩm truyền thông sáng tạo và các dự án tiêu biểu.',
    items: ['Ấn phẩm truyền thông', 'Bộ nhận diện thương hiệu', 'Dự án tiêu biểu'],
  },
  {
    slug: 'seo-website',
    title: 'SEO - Website',
    description: 'Thiết kế website chuẩn UX/UI, tối ưu SEO top Google, quản trị website toàn diện cho doanh nghiệp.',
    items: ['Thiết kế Website', 'SEO Top Google', 'Quản trị Website'],
  },
  {
    slug: 'media-studio',
    title: 'Media Studio',
    description: 'Dịch vụ quay TVC, chụp ảnh, xây dựng kênh TikTok chuyên nghiệp, nâng tầm hình ảnh doanh nghiệp.',
    items: ['Photography', 'TVC', 'Xây kênh Tik Tok'],
  },
  {
    slug: 'digital-ads',
    title: 'Digital Ads',
    description: 'Chạy quảng cáo Facebook, Google, TikTok hiệu quả, tối ưu chi phí, tăng trưởng doanh số vượt trội.',
    items: ['Quảng Cáo Facebook', 'Quảng Cáo Google', 'Quảng Cáo TikTok'],
  },
  {
    slug: 'truyen-thong-bao-chi',
    title: 'Truyền thông Báo chí',
    description: 'Booking KOL/KOC, booking báo chí, chăm sóc fanpage giúp thương hiệu lan tỏa mạnh mẽ.',
    items: ['Booking KOL/KOC', 'Booking Báo chí', 'Chăm sóc Fanpage'],
  },
];

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <Header />
      <section className="pt-32 pb-16 px-4 md:px-0">
        <ServiceTitle>{service.title}</ServiceTitle>
        <p className="text-center text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
          {service.description}
        </p>
        <div className="container mx-auto max-w-2xl">
          <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-blue-100">
            <h2 className="text-xl font-bold mb-4 text-blue-700">Danh mục dịch vụ</h2>
            <ul className="space-y-3">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-gray-800 font-medium">
                  <span className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-pink-400 inline-block"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 