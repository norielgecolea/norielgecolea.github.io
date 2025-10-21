import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noriel Gecolea's Digital Portfolio",
  description: "See my works.",
  icons: {
    icon: "/favicon.ico", // or "/favicon.png"
  },
};

export default function RootLayout(








  {





    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="items-center justify-items-center min-h-screen pt-8  pb-0 gap-16 sm:pt-10 overflow-hidden">
          <Navbar />
          {children}

        </div>
        <Footer />
      </body>
    </html>
  );
}
