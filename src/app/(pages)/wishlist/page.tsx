import { SongItem2 } from "@/app/components/Song/SongItem2";
import { Title } from "@/app/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trang Danh Sách Bài Hát Yêu Thích",
  description: "Trang Danh Sách Bài Hát Yêu Thích ứng dụng nghe nhạc trực tuyến",
};

export default function WishlistPage() {
  const data = [
    {
      image: '/demo/image_1.png',
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu",
      time: "4:32"
    },
    {
      image: '/demo/image_1.png',
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu",
      time: "4:32"
    },
    {
      image: '/demo/image_1.png',
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu",
      time: "4:32"
    },
    {
      image: '/demo/image_1.png',
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu",
      time: "4:32"
    },
    {
      image: '/demo/image_1.png',
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu",
      time: "4:32"
    },
    {
      image: '/demo/image_1.png',
      title: "Cô Phòng",
      singer: "Hồ Quang Hiếu",
      time: "4:32"
    }
  ]

  return (
    <>
      <div className=''>
        <div className='container mx-auto'>
          <Title text='Bài Hát Yêu Thích' />
          <div className='flex flex-col gap-y-[10px]'>
            {data && data.map((item, index) => (
              <SongItem2 key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}