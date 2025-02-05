import { CategoryDetailSection1 } from "@/app/components/Section/CategorySection/CategoryDetailSection1";
import { CategoryDetailSection2 } from "@/app/components/Section/CategorySection/CategoryDetailSection2";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Danh Sách Bài Hát Theo Danh Mục",
  description: "Trang Danh Sách Bài Hát Theo Danh Mục Bài Hát ứng dụng nghe nhạc trực tuyến",
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function CategoryDetailPage(props: { params: any }) {
  const { id } = await props.params;

  return (
    <>
      <CategoryDetailSection1 id={id} />

      <Suspense>
        <CategoryDetailSection2 idCategory={id} title='Danh Sách Bài Hát' idSong='' idSinger='' search={false} wishlist={false} />
      </Suspense>
    </>
  );
}