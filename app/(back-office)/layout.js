import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "USaloon",
  description: "A Next.js 14 Saloon Application",
};

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <main className="flex flex-row">
          <Sidebar />

          <section className="flex min-h-screen flex-1 flex-col items-center bg-pink-200 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
