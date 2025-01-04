"use client";

import { get, ref } from "firebase/database";
import { dbFirebase } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { Title } from "../../Title/Title";
import { SongItem2 } from "../../Song/SongItem2";

interface Song {
  id: string;
  image: string;
  title: string;
  singer: string;
  time: string;
}

export const CategoryDetailSection2 = (props: {
  idCategory: string,
  title: string,
  idSong: String,
  idSinger: String
}) => {
  const { idCategory, title, idSong, idSinger } = props;
  const [dataSongs, setDataSongs] = useState<Song[]>([]);

  useEffect(() => {
    const listSongs: any[] = [];
    const songRef = ref(dbFirebase, 'songs');
    get(songRef).then(async (items) => {
      for (const [key, data] of Object.entries(items.val())) {
        const dataSong: any = data;
        if (data && dataSong.categoryId === idCategory && key !== idSong) {
          const singerName: any[] = [];

          for (const id of dataSong.singerId) {
            await get(ref(dbFirebase, '/singers/' + id)).then(item => {
              singerName.push(item.val().title);
            });
          }

          listSongs.push({
            id: key,
            image: dataSong.image,
            title: dataSong.title,
            singer: singerName.join(", "),
            link: `/song/${idSong}`,
            listen: dataSong.listen,
          });
        } else if (dataSong.singerId.includes(idSinger)) {
          const singerName: any[] = [];

          for (const id of dataSong.singerId) {
            await get(ref(dbFirebase, '/singers/' + id)).then(item => {
              singerName.push(item.val().title);
            });
          }

          listSongs.push({
            id: key,
            image: dataSong.image,
            title: dataSong.title,
            singer: singerName.join(", "),
            link: `/song/${idSong}`,
            listen: dataSong.listen,
          });
        }
      }
      setDataSongs(listSongs);
    });
  }, []);

  return (
    <>
      <div className=''>
        <div className='container mx-auto'>
          <Title text={title} />
          <div className='flex flex-col gap-y-[10px]'>
            {dataSongs && dataSongs.map((item, index) => (
              <SongItem2 key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}