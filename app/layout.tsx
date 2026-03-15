import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextGen AI Dashboard | Enterprise UX',
  description: 'AI-driven UX reference architecture.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-50 antialiased font-sans">{children}</body>
    </html>
  )
}