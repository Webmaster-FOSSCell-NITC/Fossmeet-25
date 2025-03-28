import type { Metadata } from "next";
import "./globals.css";
import { gloriaHallelujah } from "@/fonts";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "FOSSMeet'25",
  description: "Official Website of FOSSMeet'25",
  icons: {
    icon: "/favicon.jpeg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${gloriaHallelujah.className} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
