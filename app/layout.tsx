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
        <div className="site-wrapper">
          <header className="site-header">
            <nav className="site-nav">
              <a href="/" className="site-logo">Next.js Docker</a>
              <div className="site-links">
                <a href="/" className="site-link">Home</a>
                <a href="/about" className="site-link">About Us</a>
                <a href="/docs" className="site-link">Documentation</a>
              </div>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
