import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientChatWrapper from '@/components/ClientChatWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trung Huy Marketing - Chiến lược thực thi - Giải pháp toàn diện',
  description: 'Trung Huy Marketing - Công ty Marketing đa quốc gia, cung cấp giải pháp Marketing toàn diện giúp các doanh nghiệp Việt Nam vươn xa ra toàn cầu.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        {children}
        <ClientChatWrapper />
      </body>
    </html>
  )
} 