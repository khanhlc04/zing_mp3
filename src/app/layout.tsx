import type { Metadata } from "next";
import "./globals.css";
import { Play } from "./components/Play/Play";
import { Sider } from "./components/Sider/Sider";
import { Search } from "./components/Search/Search";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Zing MP3",
  description: "Ứng dụng nghe nhạc trực tuyến",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className='bg-[#292929]'>
        <div className="container mx-auto">
          <div className="flex items-start">
            <div className="w-[280px]">
              <Sider />
            </div>
            <div className="flex-1 ml-[20px]">
              <Suspense>
                <Search />
              </Suspense>
              <main className="mt-[30px] mb-[150px]">
                {children}
              </main>
            </div>
          </div>
        </div>
        <Play />
      </body>
    </html>
  );
}
