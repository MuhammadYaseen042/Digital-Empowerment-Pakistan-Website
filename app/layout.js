import Navbar from './component/navbar'
import './component/navbar.module.css'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './component/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Digital Empowerment Pakistan',
  description: 'Digital Empowerment Pakistan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
