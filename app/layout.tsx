import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';


const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Single Price Component",
  description: "Created by Coding With Mr.M",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}
        <Analytics />

      </body>
    </html>
  );
}
