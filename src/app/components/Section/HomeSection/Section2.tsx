"use client";

import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { Title } from "../../Title/Title";
import { CartItem } from "../../Card/CardItem";
import { dbFirebase } from "@/app/firebaseConfig";

interface Category {
  id: string;
  description: string;
  image: string;
  title: string;
  link: string;
  audio: string;
}

export const Section2 = (props: {home: Boolean}) => {
  const { home } = props;
  const [dataSection2, setDataSection2] = useState<Category[]>([]);

  useEffect(() => {
    const listCategory: any[] = [];
    const categoryRef = ref(dbFirebase, 'categories');
    get(categoryRef).then(items => {
      items.forEach((item) => {
        const key = item.key;
        const data = item.val();

        if (home && listCategory.length < 5 || !home) {
          listCategory.push({
            id: key,
            description: data.description,
            image: data.image,
            title: data.title,
            link: `categories/${key}`,
            audio: data.audio
          });
        }
      });
      setDataSection2(listCategory);
    });
  }, []);

  return (
    <>
      <div className="mb-[30px]">
        <div className='container mx-auto'>
          {home ? 
            (<Title text="Danh Mục Nổi Bật" />) : 
            (<Title text="Danh Mục Bài Hát" />)
          }
          
          <div className='grid grid-cols-5 gap-[20px]'>
            {dataSection2 && dataSection2.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}