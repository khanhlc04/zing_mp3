import { CategoryDetailSection2 } from "@/app/components/Section/CategorySection/CategoryDetailSection2";
import { SongSection1 } from "@/app/components/Section/SongSection/SongSection1";
import { SongSection2 } from "@/app/components/Section/SongSection/SongSection2";
import { dbFirebase } from "@/app/firebaseConfig";
import { get, ref } from "firebase/database";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chi Tiết Bài Hát",
  description: "Trang Chi Tiết Bài Hát ứng dụng nghe nhạc trực tuyến",
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function SongDetailPage(props: {params: any}) {
  const { id } = await props.params;

  let categoryId = '';

  const songRef = ref(dbFirebase, '/songs/' + id);
  await get(songRef).then((snapshot) => {
    categoryId = snapshot.val().categoryId;
  })

  return (
    <>
      <SongSection1 id={id}/>

      <SongSection2 id={id}/>

      <CategoryDetailSection2 idCategory={categoryId} title='Bài Hát Cùng Danh Mục' idSong={id} idSinger='' search={false} wishlist={false}/>
    </>
  );
}