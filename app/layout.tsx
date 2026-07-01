import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";
import { Poppins } from "next/font/google";
import { Manrope } from "next/font/google";
import { Space_Grotesk } from "next/font/google";


const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});


const inter = Inter({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivani Bhalsakle",
  description:
    "Portfolio of Shivani Bhalsakle – Business Analyst, Project Analyst, and Strategy & Operations professional.",
  keywords: [
    "Shivani Bhalsakle",
    "Business Analyst",
    "Project Analyst",
    "Portfolio",
    "Data Analytics",
    "Power BI",
    "SQL",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={spacegrotesk.className}>{children} <Cursor />

</body>
    </html>
  );
}
