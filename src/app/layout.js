import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "./navbar";
import Contact from "./Components/Contact";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Adams Keys Portfolio",
  description: "Portfolio for Adam Keys",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="light:bg-white dark:bg-slate-950 dark:text-white light:text-black">
        <Providers>
          <div className="md:w-3/4 mx-auto p-4">
            <Navbar />
            <main className="p-1">{children}</main>
          </div>
          <div className="w-full dark:bg-[#242424]">
            <div className="mt-20 md:w-3/4 mx-auto p-4" id="contact">
              <Contact />
            </div>
            <div className="md:w-3/4 mx-auto p-4">
              <Image
                src="/assets/images/pattern-rings.svg"
                alt="rings"
                width={400}
                height={50}
                priority
                className="absolute md:relative -z-60 md:bottom-0 left-[-200px] md:left-100 "
              />
              <hr className="my-8" />
              <Navbar />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
