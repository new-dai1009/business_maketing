import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceTitle from '@/components/ServiceTitle';
import Image from 'next/image';

const BENEFITS = [
  'Tăng nhận diện thương hiệu trên thị trường',
  'Tạo dựng niềm tin và sự chuyên nghiệp với khách hàng',
  'Khác biệt hóa so với đối thủ cạnh tranh',
  'Hỗ trợ hiệu quả cho các chiến dịch marketing và bán hàng',
];

const PROCESS = [
  'Khảo sát & phân tích thương hiệu hiện tại',
  'Tư vấn chiến lược xây dựng thương hiệu',
  'Thiết kế bộ nhận diện (logo, slogan, màu sắc, ấn phẩm)',
  'Triển khai truyền thông thương hiệu đa kênh',
  'Đánh giá & tối ưu hiệu quả nhận diện',
];

const PRICING = [
  { name: 'Gói Cơ Bản', price: '8.000.000đ', features: ['Logo chuyên nghiệp', 'Bộ nhận diện cơ bản', 'Tư vấn chiến lược'] },
  { name: 'Gói Nâng Cao', price: '18.000.000đ', features: ['Logo sáng tạo', 'Bộ nhận diện đầy đủ', 'Tư vấn & triển khai truyền thông', 'Hỗ trợ chỉnh sửa 3 lần'] },
  { name: 'Gói Premium', price: 'Liên hệ', features: ['Thiết kế cao cấp', 'Chiến lược thương hiệu toàn diện', 'Triển khai đa kênh', 'Hỗ trợ lâu dài'] },
];

export default function BrandingDetail() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <Header />
      <section className="pt-32 pb-16 px-4 md:px-0">
        <ServiceTitle>Branding - Xây dựng thương hiệu chuyên nghiệp</ServiceTitle>
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-pink-600">Tại sao cần Branding?</h2>
            <p className="text-gray-700 mb-6 text-lg">Branding giúp doanh nghiệp tạo dấu ấn riêng, tăng giá trị cảm nhận và xây dựng lòng trung thành từ khách hàng. Một thương hiệu mạnh là nền tảng cho mọi hoạt động marketing thành công.</p>
            <ul className="space-y-3 mb-6">
              {BENEFITS.map((b, i) => (
                <li key={i} className="flex items-center gap-3 text-base text-gray-800"><span className="w-3 h-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 inline-block"></span>{b}</li>
              ))}
            </ul>
            <h3 className="text-xl font-bold mb-2 text-pink-500">Quy trình thực hiện</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-6">
              {PROCESS.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
          <div className="flex justify-center">
            <Image src="/branding-demo.jpg" alt="Branding demo" width={420} height={420} className="rounded-2xl shadow-xl object-cover" />
          </div>
        </div>
        <div className="container mx-auto max-w-4xl mb-16">
          <h2 className="text-2xl font-bold mb-4 text-pink-600">Bảng giá dịch vụ Branding</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-2xl shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-pink-100 to-orange-100">
                  <th className="py-3 px-6 text-left font-bold text-pink-700">Gói dịch vụ</th>
                  <th className="py-3 px-6 text-left font-bold text-pink-700">Giá</th>
                  <th className="py-3 px-6 text-left font-bold text-pink-700">Tính năng</th>
                </tr>
              </thead>
              <tbody>
                {PRICING.map((row, i) => (
                  <tr key={i} className="border-b last:border-none">
                    <td className="py-3 px-6 font-semibold text-gray-800">{row.name}</td>
                    <td className="py-3 px-6 text-pink-600 font-bold">{row.price}</td>
                    <td className="py-3 px-6">
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {row.features.map((f, j) => <li key={j}>{f}</li>)}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 