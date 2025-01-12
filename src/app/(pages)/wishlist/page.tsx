import { CategoryDetailSection2 } from "@/app/components/Section/CategorySection/CategoryDetailSection2";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Trang Danh Sách Bài Hát Yêu Thích",
  description: "Trang Danh Sách Bài Hát Yêu Thích ứng dụng nghe nhạc trực tuyến",
};

export default function WishlistPage() {
  return (
    <>
      <Suspense>
        <CategoryDetailSection2 idCategory='' title='Bài Hát Yêu Thích' idSong='' idSinger='' search={false} wishlist={true} />
      </Suspense>
    </>
  );
}