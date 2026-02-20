import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { AuthProvider } from "@/contexts/AuthContext";
import { Roboto, Roboto_Condensed } from "next/font/google";
import { CartProvider } from "@/contexts/CartContex";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BLU Store",
  description: "Tienda de tecnología",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${roboto.variable} ${robotoCondensed.variable} antialiased`}>
        <AuthProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen">
              <NavBar />
              <main className="flex-grow pt-16">
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}