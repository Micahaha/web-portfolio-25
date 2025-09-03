// app/layout.tsx (or pages/_document.tsx if using pages router)
import { Metadata } from 'next'
import { headers } from 'next/headers'
import './globals.css'
import { usePathname } from 'next/navigation' // not required, just example

export const metadata: Metadata = {
  title: 'My Portfolio',
  icons: [{ rel: 'icon', url: '/favicon.ico' }], // Next rewrites this w/ basePath automatically
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
