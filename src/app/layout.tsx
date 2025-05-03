"use client"
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleProvider, QueryclientProvider } from "@/components"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <QueryclientProvider>
          <GoogleProvider>
            {children}
          </GoogleProvider>
        </QueryclientProvider>

      </body>
    </html>
  );
}
