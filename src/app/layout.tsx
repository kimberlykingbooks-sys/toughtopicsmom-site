import type { Metadata } from "next";
import { Nunito, Alegreya, Poppins, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

const alegreya = Alegreya({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-alegreya",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

// Canva Sans is a proprietary Canva font with no public web version;
// Jost is a close geometric-sans substitute for card/heading-level text.
const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toughtopicsmom.com"),
  title: "Tough Topics Mom",
  description:
    "Child sexual abuse prevention education for families, from author and speaker Kimberly King.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${alegreya.variable} ${poppins.variable} ${jost.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
