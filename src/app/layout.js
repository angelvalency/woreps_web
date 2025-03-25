import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Woreps",
  description: "Dapatkan hasil maksimal dengan Woreps untuk hidup lebih sehat dan bugar.",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/image/woreps.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
