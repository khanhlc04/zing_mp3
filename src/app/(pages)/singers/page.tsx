
import { Section3 } from "@/app/components/Section/HomeSection/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang Danh Sách Ca Sĩ",
  description: "Trang Danh Sách Ca Sĩ ứng dụng nghe nhạc trực tuyến",
};

export default function SingerPage() {

  return (
    <>
     <Section3 home={false} />
    </>
  );
}