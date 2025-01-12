"use client";

import { get, ref } from "firebase/database";
import { dbFirebase } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { SongItem } from "@/app/components/Song/SongItem";

interface Song {
  id: string;
  image: string;
  title: string;
  singer: string;
  link: string;
  listen: number;
  audio: string;
  wishlist: string[];
}

export const Section1 = () => {
  const [dataSection1, setDataSection1] = useState<Song[]>([]);

  useEffect(() => {
    const songRef = ref(dbFirebase, 'songs');

    get(songRef).then(async (items) => {
      const listSongs: Song[] = [];

      for(const [key, data] of Object.entries(items.val())) {
        if(data) {
          const singerName: any[] = [];

          const dataSong :any = data;
          for(const id of dataSong.singerId){
            await get(ref(dbFirebase, '/singers/' + id)).then(item => {
              singerName.push(item.val().title);
            });
          }

          if(listSongs.length < 3){
            listSongs.push({
              id: key,
              image: dataSong.image,
              title: dataSong.title,
              singer: singerName.join(", "),
              link: `song/${key}`,
              listen: dataSong.listen,
              audio: dataSong.audio,
              wishlist: dataSong.wishlist
            });
          }
        }
      }
      setDataSection1(listSongs);
    });
  }, []);

  return (
    <>
      <div className='flex flex-col gap-[12px]'>
        {dataSection1.map((item, index) => (
          <SongItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};
