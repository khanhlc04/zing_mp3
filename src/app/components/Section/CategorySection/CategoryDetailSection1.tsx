"use client";

import { get, ref } from "firebase/database";
import { useEffect, useState } from "react";
import { dbFirebase } from "@/app/firebaseConfig";
import { CardInfo } from "../../Card/CardInfo";

interface Category {
  description: string;
  image: string;
  title: string;
}

export const CategoryDetailSection1 = (props: { id: string }) => {
  const { id } = props;
  const [dataCategory, setDataCategory] = useState<Category>();

  useEffect(() => {
    const categoryRef = ref(dbFirebase, '/categories/' + id);
    get(categoryRef).then(item => {
      const data = item.val();

      setDataCategory({
        description: data.description,
        image: data.image,
        title: data.title,
      });
    });
    console.log(categoryRef)
  }, []);

  return (
    <>
      <div className='mb-[30px]'>
        <div className='container mx-auto'>
          {dataCategory && (
            <CardInfo
              image={dataCategory.image}
              title={dataCategory.title}
              description={`${dataCategory.description} được Zing MP3 tự động tổng hợp dựa trên thông tin số liệu lượt nghe và lượt chia
                          sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy trong 30 ngày gần nhất và được cập nhật liên tục.`}
            />
          )}
        </div>
      </div>
    </>
  );
}