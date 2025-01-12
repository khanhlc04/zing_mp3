"use client";

import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { dbFirebase } from "@/app/firebaseConfig";
import { CardInfo } from "../../Card/CardInfo";

interface Song {
  singer: string;
  image: string;
  title: string;
}

export const SongSection1 = (props: { id: string }) => {
  const { id } = props;
  const [dataSong, setDataSong] = useState<Song>();

  useEffect(() => {
    const songRef = ref(dbFirebase, '/songs/' + id);
    get(songRef).then(async (item) => {
      const data = item.val();

      if (data.singerId) {
        const singers: string[] = [];
        const singerIds = data.singerId;
        for(const singerId of singerIds) {
          const singerRef = ref(dbFirebase, '/singers/' + singerId);
          await get(singerRef).then(item => {
            singers.push(item.val().title)
            setDataSong({
              singer: singers.join(", "),
              image: data.image,
              title: data.title,
            })
          });
        }
      }
    });
  }, []);

  return (
    <>
      <div className='mb-[30px]'>
        <div className='container mx-auto'>
          {dataSong && (
            <CardInfo
              image={dataSong.image}
              title={dataSong.title}
              description={dataSong.singer}
            />
          )}
        </div>
      </div>
    </>
  );
}