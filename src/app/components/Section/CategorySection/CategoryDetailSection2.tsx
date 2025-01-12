"use client";

import { get, ref } from "firebase/database";
import { authFirebase, dbFirebase } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { Title } from "../../Title/Title";
import { SongItem2 } from "../../Song/SongItem2";
import { useSearchParams } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";

interface Song {
  id: string;
  image: string;
  title: string;
  singer: string;
  time: string;
  listen: string;
  audio: string;
  wishlist: string[];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const CategoryDetailSection2 = (props: {
  idCategory: string,
  title: string,
  idSong: string,
  idSinger: string,
  search: boolean,
  wishlist: boolean
}) => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";

  const pushListSong = async (listSongs: any[], key: string, dataSong: any) => {
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
      link: `/song/${key}`,
      listen: dataSong.listen,
      audio: dataSong.audio,
      wishlist: dataSong.wishlist
    });
  }

  const { idCategory, title, idSong, idSinger, search, wishlist } = props;
  const [dataSongs, setDataSongs] = useState<Song[]>([]);

  useEffect(() => {
    const listSongs: any[] = [];
    const songRef = ref(dbFirebase, 'songs');
    if (wishlist) {
      onAuthStateChanged(authFirebase, async (user) => {
        if (user) {
          const userId = user.uid;

          get(songRef).then(async (items) => {
            for (const [key, data] of Object.entries(items.val())) {
              const dataSong: any = data;
              if (dataSong.wishlist && dataSong.wishlist[userId]) {
                await pushListSong(listSongs, key, dataSong);
              }
            }
            setDataSongs(listSongs);
          });
        }
      })
    } else {
      get(songRef).then(async (items) => {
        for (const [key, data] of Object.entries(items.val())) {
          const dataSong: any = data;
          if (
            data && dataSong.categoryId === idCategory && key !== idSong ||
            dataSong.singerId.includes(idSinger) ||
            search && dataSong.title.toLowerCase().includes(keyword.toLowerCase())
          ) {
            await pushListSong(listSongs, key, dataSong);
          }
        }
        setDataSongs(listSongs);
      });
    }
  }, [keyword]);

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