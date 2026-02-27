import { Bellefair, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { AnimatePresence, motion } from "framer-motion";

const getBellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: ["400"],
});

const getBarlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "400"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["100", "200", "400"],
});

export const metadata = {
  title: {
    template: "%s | Space Tourism",
    default: "Welcome | Space Tourism",
  },
  icons: {
    icon: "/favicon.svg",
  },
  description: "Explore the space",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${getBellefair.variable} ${getBarlow.variable}
    ${barlowCondensed.variable} antialiased min-h-screen flex flex-col max-w-[1440px] mx-auto`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
