import SideBar from "@/components/Sidebar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col lg:flex-row  `}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
