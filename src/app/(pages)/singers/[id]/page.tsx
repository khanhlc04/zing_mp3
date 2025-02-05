import { CategoryDetailSection2 } from "@/app/components/Section/CategorySection/CategoryDetailSection2";
import { SingerDetailSection1 } from "@/app/components/Section/SingerSection/SingerDetailSection1";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Trang Chi Tiết Ca Sĩ",
  description: "Trang Chi Tiết Ca Sĩ ứng dụng nghe nhạc trực tuyến",
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function SingerDetailPage(props: { params: any }) {
  const { id } = await props.params;

  return (
    <>
      <SingerDetailSection1 id={id} />

      <Suspense>
        <CategoryDetailSection2 idCategory='' title='Danh Sách Bài Hát' idSong='' idSinger={id} search={false} wishlist={false} />
      </Suspense>
    </>
  );
}