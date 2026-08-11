import { Inter, Sora, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Global/Navbar";
import Footer from "@/components/Global/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

export const metadata = {
  title: "NoxiS | Architecting the Future of Digital",
  description:
    "Digital experience, architecture, and engineering studio delivering high-end transformation for ambitious brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable} ${orbitron.variable} font-body bg-bg-primary text-text-primary antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}