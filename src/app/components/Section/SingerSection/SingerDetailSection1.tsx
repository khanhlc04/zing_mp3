"use client";

import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { dbFirebase } from "@/app/firebaseConfig";
import { CardInfo } from "../../Card/CardInfo";

interface Singer {
  title: string;
  image: string;
  description: string;
}

export const SingerDetailSection1 = (props: { id: string }) => {
  const { id } = props;
  const [dataSinger, setDataSinger] = useState<Singer>();

  useEffect(() => {
    const singerRef = ref(dbFirebase, '/singers/' + id);
    get(singerRef).then(async (item) => {
      const data = item.val();

      setDataSinger(data);
    });
  }, []);

  return (
    <>
      <div className='mb-[30px]'>
        <div className='container mx-auto'>
          {dataSinger && (
            <CardInfo
              image={dataSinger.image}
              title={dataSinger.title}
              description={dataSinger.description}
            />
          )}
        </div>
      </div>
    </>
  );
}