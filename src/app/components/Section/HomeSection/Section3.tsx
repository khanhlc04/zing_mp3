"use client";

import { get, ref } from "firebase/database";
import { dbFirebase } from "../../../firebaseConfig";
import { useEffect, useState } from "react";
import { Title } from "../../Title/Title";
import { CartItem } from "../../Card/CardItem";

interface Singer {
  id: string;
  description: string;
  image: string;
  title: string;
  link: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export const Section3 = (props: { home: boolean }) => {
  const { home } = props;
  const [dataSection3, setDataSection3] = useState<Singer[]>([]);

  useEffect(() => {
    const listSinger: any[] = [];
    const singerRef = ref(dbFirebase, 'singers');
    get(singerRef).then(items => {
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();

        if (
          home && listSinger.length < 5 ||
          !home
        ) {
          listSinger.push({
            id: key,
            description: data.description,
            image: data.image,
            title: data.title,
            link: `singers/${key}`
          });
        }
      });
      setDataSection3(listSinger);
    });
  }, []);

  return (
    <>
      <div className="">
        <div className='container mx-auto'>
          <Title text="Ca Sĩ Nổi Bật" />
          <div className='grid grid-cols-5 gap-x-[20px]'>
            {dataSection3 && dataSection3.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}