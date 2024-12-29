import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang Chủ",
  description: "Trang Chủ ứng dụng nghe nhạc trực tuyến",
};


export default function Home() {
  return (
    <>
      <h1 className="h-[3000px] bg-white">Trang Chủ</h1>
    </>
  );
}
