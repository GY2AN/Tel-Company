import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Fraunces, Inter } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hair Oil Shop",
  description: "Natural hair oils for hairfall, dandruff & more",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} font-sans`}>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#1E293B", // navy
              color: "#fff",
              fontFamily: "var(--font-inter)",
            },
          }}
        />
      </body>
    </html>
  );
}