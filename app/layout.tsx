import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavHeader from "@/components/NavHeader";

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "300", "700"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "900"],
  display: "optional",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.className} antialiased text-gray-700`}
      >
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
