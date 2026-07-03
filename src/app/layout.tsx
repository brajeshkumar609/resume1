import type { Metadata } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Brajesh Kumar - Senior Cloud & Infrastructure Engineer',
  description:
    'Premium portfolio showcasing expertise in cloud architecture, DevOps, and enterprise infrastructure solutions.',
  keywords: [
    'Cloud Engineer',
    'DevOps',
    'AWS',
    'Kubernetes',
    'Infrastructure',
    'Terraform',
  ],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://brajeshkumar.com" />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} bg-slate-950 text-slate-100`}>
        {children}
      </body>
    </html>
  )
}
