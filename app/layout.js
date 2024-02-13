"use client";
import "./globals.css";
import { mainFont } from "@/lib/font";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { AuthContextProvider } from "@/context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} antialiased scroll-smooth flex flex-col lg:flex-row  `}
      >
        <ThemeContextProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
