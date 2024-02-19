import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mathematricks",
  description: "Mathematricks - Learn all the tricks tobecome a Mathematician",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='p-4 max-w-7xl m-auto min-w-[300px]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
