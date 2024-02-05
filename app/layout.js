"use client";
import "./globals.css";
import { mainFont } from "@/lib/font";
import { ThemeContextProvider } from "@/context/Theme/ThemeContext";
import { AuthContextProvider } from "@/context/Theme/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} antialiased scroll-smooth flex flex-col lg:flex-row overflow-hidden `}
      >
        <ThemeContextProvider>
          <AuthContextProvider>{children}</AuthContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
