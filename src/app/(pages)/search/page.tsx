import { CategoryDetailSection2 } from "@/app/components/Section/CategorySection/CategoryDetailSection2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang Kết Quả Tìm Kiếm",
  description: "Trang Kết Quả Tìm Kiếm ứng dụng nghe nhạc trực tuyến",
};

export default function SearchPage() {
  return (
    <>
       <CategoryDetailSection2 idCategory='' title='Kết Quả Tìm Kiếm' idSong='' idSinger='' search={true} wishlist={false}/>
    </>
  );
}