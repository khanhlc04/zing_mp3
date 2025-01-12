"use client";

import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { dbFirebase } from "@/app/firebaseConfig";
import { Title } from "../../Title/Title";


export const SongSection2 = (props: { id: string }) => {
  const { id } = props; 
  const [lyric, setLyric] = useState<string>();

  useEffect(() => {
    const songRef = ref(dbFirebase, '/songs/' + id);
    get(songRef).then(item => {
      const data = item.val();
      setLyric(data.lyric)
    });
  }, []);

  return (
    <>
      <div className="mb-[30px]">
        <div className='container mx-auto'>
          <Title text='Lời Bài Hát' />
          <div className='bg-[#212121] rounded-[15px]'>
            <p className='text-white font-[500] text-[14px] leading-[16.8px] p-[20px] whitespace-pre-line'>
              {lyric}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}