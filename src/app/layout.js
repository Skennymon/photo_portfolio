import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar.js"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-oswald",
});

export const metadata = {
  title: "Kennys Photo Portfolio",
  description: "Here are some photos I took for fun :D",
};
// ${geistSans.variable} ${geistMono.variable}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
