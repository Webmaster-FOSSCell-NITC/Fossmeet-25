import type { Metadata } from "next";
import "./globals.css";
import { gloriaHallelujah } from "@/fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FOSSMeet'25",
  description: "Official Website of FOSSMeet'25",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gloriaHallelujah.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
