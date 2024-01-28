"use client";
import SideBar from "@/components/Sidebar";
import "./globals.css";
import { mainFont } from "@/lib/font";
import { ThemeContextProvider } from "@/context/Theme/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} antialiased scroll-smooth flex flex-col lg:flex-row overflow-hidden `}
      >
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
