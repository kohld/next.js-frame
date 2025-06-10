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
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <header className="bg-white dark:bg-gray-800 shadow-md">
            <nav className="w-full max-w-4xl mx-auto flex flex-col items-center py-4 text-center justify-center">
              <a
                href="/"
                className="text-2xl font-extrabold tracking-tight mb-2 text-gray-900 dark:text-gray-100"
              >
                Next.js Docker
              </a>
              <div className="flex space-x-8 mt-2 justify-center text-center w-full">
                <a
                  href="/"
                  className="border-b-2 border-transparent hover:border-blue-500 text-gray-900 dark:text-gray-100 px-2 py-1 text-base font-medium transition-colors"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="border-b-2 border-transparent hover:border-blue-500 text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 px-2 py-1 text-base font-medium transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/docs"
                  className="border-b-2 border-transparent hover:border-blue-500 text-gray-500 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-300 px-2 py-1 text-base font-medium transition-colors"
                >
                  Documentation
                </a>
              </div>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
