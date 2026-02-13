import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharmesh | Frontend Developer",
  description:
    "Portfolio of Dharmesh – Frontend Developer specializing in React, Next.js, and Angular.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          font-sans
          antialiased
          bg-white text-zinc-700
          dark:bg-zinc-950 dark:text-zinc-300
          transition-colors
        `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
