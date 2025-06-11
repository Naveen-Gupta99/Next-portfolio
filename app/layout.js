import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "./components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Naveen-Gupta-Portfolio",
  description: "this is my first Next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Navbar />
  
      {/* Background wrapper */}
      <div className="relative w-full min-h-screen">
        {/* Top 540px radial background */}
        <div className="absolute top-0 left-0 right-0 h-[540px] z-0 bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
  
        {/* Bottom full background with grid + mask */}
        <div className="absolute top-[540px] left-0 right-0 bottom-0 z-0 bg-slate-950" />
        <div className="absolute top-[540px] left-0 right-0 bottom-0 z-0 
          bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
          bg-[size:14px_24px] 
          [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  
        {/* Main content (children from page) */}
        <main className="relative z-10 px-4 py-8">
       <SessionWrapper> {children}</SessionWrapper>
        </main>
      </div>
  
      <Footer />
    </body>
  </html>
  
  

  );
}
