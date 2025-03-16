import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'HYPCHLOR® - Premium Sodium Hypochlorite Solution',
  description: 'Leading manufacturer of high-quality Sodium Hypochlorite Solution. BIS, ISO, and GMP certified.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={`${poppins.className} bg-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}