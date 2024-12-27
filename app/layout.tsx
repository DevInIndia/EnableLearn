import { Inter } from 'next/font/google'
import Header from './../components/header'
import Footer from './../components/footer'
import ThemeProvider from './../components/theme-provider'
import { Providers } from './../components/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Enable Learn',
  description: 'Empowering Inclusive Education for All',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ThemeProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
