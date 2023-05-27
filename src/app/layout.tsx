import PrimaryLayout from '@/components/layouts/primary'
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

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
      <body className={inter.className}>
        <PrimaryLayout>{children}</PrimaryLayout>

        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L5S53WX1FK" />
        <Script
          id='google-analytics'
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L5S53WX1FK', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </body>
    </html>
  )
}
