import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";

export const metadata: Metadata = {
  title: "Restaurant Management System - Modern POS Solution",
  description: "A comprehensive, open-source desktop application for managing restaurant operations including sales, inventory, analytics, and more. Free, fast, and privacy-focused.",
  keywords: ["restaurant management", "POS system", "point of sale", "restaurant software", "inventory management", "analytics", "open source"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
