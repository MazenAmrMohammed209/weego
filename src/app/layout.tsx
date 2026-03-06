import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";
import { LanguageProvider } from "@/context/LanguageContext";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cairoFont = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "WEEGO | Premium Travel Booking",
  description: "Modern travel-tech platform for professional booking and rewards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interFont.variable} ${cairoFont.variable} antialiased min-h-screen flex flex-col`}>
        <LanguageProvider>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </ThemeProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
