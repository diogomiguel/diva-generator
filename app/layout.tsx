import type { Metadata } from 'next'
import { Cinzel, Crimson_Text } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cinzel = Cinzel({ 
  subsets: ["latin"],
  variable: '--font-cinzel',
  display: 'swap',
});

const crimsonText = Crimson_Text({ 
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: '--font-crimson',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Who is Your Medieval Diva?',
  description: 'Discover your inner medieval diva with this playful quiz',
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-slate-900">
      <body className={`${cinzel.variable} ${crimsonText.variable} font-serif antialiased min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
