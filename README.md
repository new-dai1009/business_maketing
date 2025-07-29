# Trung Huy Marketing - Next.js Marketing Website

Website truyền thông, marketing đa dịch vụ, xây dựng bằng **Next.js 14 + TypeScript + TailwindCSS**.  
Giao diện hiện đại, tối ưu UX/UI, dễ mở rộng, chuẩn SEO, responsive.

---

## 🚀 Bắt đầu nhanh

1. **Cài đặt dependencies:**
   ```bash
   npm install
   # hoặc
   yarn install
   # hoặc
   pnpm install
   ```

2. **Chạy server phát triển:**
   ```bash
   npm run dev
   # hoặc
   yarn dev
   # hoặc
   pnpm dev
   ```

3. **Truy cập:**  
   [http://localhost:3000](http://localhost:3000)

---

## 🗂️ Cấu trúc dự án

```
├── src/
│   ├── app/                 # App Router (Next.js 14)
│   │   ├── layout.tsx       # Layout tổng thể (Header, Footer, Chat, ...)
│   │   ├── page.tsx         # Trang chủ
│   │   ├── about/           # Trang giới thiệu
│   │   │   └── page.tsx
│   │   ├── marketing/       # Trang dịch vụ marketing tổng quan
│   │   │   └── page.tsx
│   │   ├── projects/        # Trang dự án tiêu biểu
│   │   │   └── page.tsx
│   │   ├── news/            # Trang tin tức, kiến thức marketing
│   │   │   └── page.tsx
│   │   ├── contact/         # Trang liên hệ
│   │   │   └── page.tsx
│   │   ├── services/        # Trang dịch vụ
│   │   │   ├── [slug]/      # Route động cho từng dịch vụ (SEO, Media, Ads, ...)
│   │   │   │   └── page.tsx
│   │   │   └── branding/    # Trang chi tiết dịch vụ Branding
│   │   │       └── page.tsx
│   │   └── globals.css      # Style toàn cục
│   ├── components/          # Các component UI (Header, Footer, Banner, ...)
│   └── ...
├── public/                  # Ảnh minh họa, favicon, ...
├── package.json             # Thông tin, scripts, dependencies
├── tailwind.config.js       # Cấu hình TailwindCSS
├── tsconfig.json            # Cấu hình TypeScript
└── README.md                # Tài liệu dự án (file này)
```

---

## ✨ Tính năng nổi bật

- **Trang chủ**: Hero, banner, dịch vụ, dự án, đối tác, testimonial, tin tức mới, chat nổi.
- **Trang dịch vụ**:  
  - Danh sách dịch vụ (Branding, SEO, Media, Digital Ads, Báo chí...)
  - Trang chi tiết từng dịch vụ (ví dụ: `/services/branding`) với lợi ích, quy trình, bảng giá, hình ảnh.
- **Trang dự án**: Slider dự án tiêu biểu, phân loại, hiệu ứng động.
- **Trang tin tức**: Giao diện card lớn, hiệu ứng động, responsive, dễ mở rộng.
- **Trang liên hệ**: Form hiện đại, thông tin công ty, hiệu ứng động.
- **Component tái sử dụng**: Header, Footer, Banner, ChatFloatingButtons, ServiceTitle, ...
- **Hiệu ứng động**: Sử dụng Framer Motion, Swiper, hover, gradient, animation mượt mà.
- **Chuẩn SEO, responsive, tối ưu UX/UI.**

---

## 🛠️ Công nghệ sử dụng

- [Next.js 14](https://nextjs.org/) (App Router, SSR, SEO)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) (tùy biến theme, responsive)
- [Framer Motion](https://www.framer.com/motion/) (animation)
- [SwiperJS](https://swiperjs.com/) (slider)
- [React Icons](https://react-icons.github.io/react-icons/)

---

## 📸 Ảnh minh họa

- Đặt ảnh banner, dự án, team, đối tác... tại thư mục `/public` hoặc dùng link ngoài.
- Có thể thay ảnh demo bằng ảnh thật của doanh nghiệp.

---

## 📝 Đóng góp & phát triển

- Fork, tạo branch mới, pull request để đóng góp.
- Mọi ý kiến, góp ý UI/UX, code, tính năng mới đều được hoan nghênh!

---

## 📄 License

MIT

---

> Made with ❤️ by [ baodaidev ]