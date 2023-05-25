import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Formini | Multipurpose online forms and document merges',
  description: 'Online forms builder is simple to use, yet powerful with AI support. Effortlessly collect and merge data into documents with precision, making the process easy and intuitive.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
