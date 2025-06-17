'use client';
import Image from 'next/image';

const partners = [
  {
    name: 'Google Partner',
    logo: 'https://trunghuymarketing.com/wp-content/uploads/2024/11/google-pn.jpg'
  },
  {
    name: 'Meta Business Partner',
    logo: 'https://trunghuymarketing.com/wp-content/uploads/2024/11/meta-pn.jpg'
  },
  {
    name: 'YouTube Certified',
    logo: 'https://trunghuymarketing.com/wp-content/uploads/2024/12/youtube-pn.jpg'
  },
  {
    name: 'TikTok Marketing Partners',
    logo: 'https://trunghuymarketing.com/wp-content/uploads/2024/11/tiktok-pn.jpg'
  }
];

const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-3 text-black drop-shadow-lg tracking-tight uppercase">Đối Tác Partner</h2>
        <p className="text-gray-500 mb-12 text-center text-lg max-w-2xl mx-auto">Chúng tôi vinh dự trở thành đối tác cao cấp của Google, Facebook, Youtube và TikTok tại Việt Nam.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12 items-center">
          {partners.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-center justify-center border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_40px_rgba(255,0,80,0.15)] hover:bg-gray-50">
              <div className="w-28 h-20 flex items-center justify-center mb-3">
                <Image src={item.logo} alt={item.name} width={120} height={80} className="object-contain rounded-xl shadow-md transition-transform duration-300 hover:scale-110" />
              </div>
              <span className="text-xs font-bold text-center mt-1 text-black drop-shadow">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 