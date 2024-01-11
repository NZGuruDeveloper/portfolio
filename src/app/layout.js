import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navbar from "./navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Adams Keys Portfolio',
  description: 'Portfolio for Adam Keys',
}

export default function RootLayout({ children }) {
  return (
<html lang="en" suppressHydrationWarning>
      <body className="light:bg-white dark:bg-slate-950 dark:text-white light:text-black  md:w-1/2 mx-auto p-4">
        <Providers>
          <Navbar />
          <main className="p-1" >
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
