import { Section2 } from "@/app/components/Section/HomeSection/Section2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Danh Mục Bài Hát",
  description: "Trang Danh Mục Bài Hát ứng dụng nghe nhạc trực tuyến",
};

export default function CategoryPage() {
  return (
    <>
      <Section2 home={false}/>
    </>
  );
}