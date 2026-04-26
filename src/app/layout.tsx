import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KLE Hotel Management | Admissions",
  description: "Premium hospitality education with placement-focused learning.",
  openGraph: {
    title: "KLE Hotel Management",
    description: "Your Future in Hospitality Starts Here",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" className={`${manrope.variable} ${playfairDisplay.variable} h-full antialiased`}><body className="min-h-full flex flex-col">{children}</body></html>;
}
