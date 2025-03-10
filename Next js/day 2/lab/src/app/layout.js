import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import'../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Link from "next/link";
import Head from "next/head";
import {Geist,Geist_Mono,Big_Shoulders_Stencil_Display}from "next/font/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const bigShoulders=Big_Shoulders_Stencil_Display({
  // weight:['400','700'],
  subsets:['latin']
})

export const metadata = {
  title: "Page Title",
  description: "Page description is written here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <title>{metadata.title}</title>
      </Head>
      <body className={`${bigShoulders.className} `}>
        <nav className="p-3 bg-dark d-flex  gap-3 text-light align-items-center ">
        
            <Link href='/csr' className="text-light ">csr</Link>
            <Link href='/ssr' className="text-light ">ssr</Link>
            <Link href='/ssg' className="text-light ">ssg</Link>
            <Link href='/isr' className="text-light ">isr</Link>
            <Link href='/about' className="text-light ">about</Link>
            <Link href='/post' className="text-light ">posts</Link>
            <Link href='/form' className="text-light ">form</Link>
            
          
        </nav>
        {children}
        <footer className="bg-dark p-5">footer</footer>
      </body>
    </html>
  );
}
