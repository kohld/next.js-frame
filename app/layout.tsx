import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js with Docker",
  description: "A Next.js project with Docker Compose for local development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
          <header className="w-full bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 shadow-sm">
            <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
              <a href="/" className="text-2xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400">Next.js Docker</a>
              <div className="flex gap-8">
                <a href="/" className="text-base font-medium text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 transition-colors">Home</a>
                <a href="/about" className="text-base font-medium text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 transition-colors">About Us</a>
                <a href="/docs" className="text-base font-medium text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 border-b-2 border-transparent hover:border-blue-600 dark:hover:border-blue-400 transition-colors">Documentation</a>
              </div>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
