import {ReactNode} from "react";
import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
    src: "./fonts/InterVF.ttf",
    variable: "--font-inter",
    weight: "100, 200, 300, 400, 500, 600, 700, 800, 900",
})

const spaceGrotesk = localFont({
    src: "./fonts/SpaceGrotesk.ttf",
    variable: "--font-space-grotesk",
    weight: "300, 400, 500, 600, 700, 800, 900",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: "A much  more in better alternative to Stack Overflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
