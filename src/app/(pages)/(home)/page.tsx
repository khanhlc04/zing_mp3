import { Metadata } from "next";
import { Title } from "../../components/Title/Title";
import { Section3 } from "@/app/components/Section/HomeSection/Section3";
import { Section1 } from "@/app/components/Section/HomeSection/Section1";
import { Section2 } from "@/app/components/Section/HomeSection/Section2";

export const metadata: Metadata = {
  title: "Trang Chủ",
  description: "Trang Chủ ứng dụng nghe nhạc trực tuyến",
};

export default function Home() {
  return (
    <>
      <div className='mb-[30px]'>
        <div className='container mx-auto'>
          <div className='flex gap-x-[20.42px]'>
            <div className="bg-cover bg-center bg-[url('/demo/backgound_1.png')] flex items-center flex-1 rounded-[15px] gap-x-[33.68px]">
              <div className='flex flex-col gap-[6px] ml-[30px]'>
                <h3 className='font-[700] text-[32px] leading-[38.4px] text-white'>
                  Nhạc EDM
                </h3>
                <p className='font-[500] text-[14px] leading-[16.8px] text-white'>
                  Top 100 Nhạc Electronic/Dance Âu Mỹ
                  là danh sách 100 ca khúc hot nhất hiện tại của thể loại
                  Top 100 Nhạc Electronic/Dance Âu Mỹ</p>
              </div>
              <img
                src="/demo/image_2.png"
                alt="img2"
                className="w-[215.52px] h-auto mr-[23.51px] pt-[40px]"
              />
            </div>
            <div className='w-[425.69px]'>
              <Title text="Nghe Nhiều" />
              <Section1 />
            </div>
          </div>
        </div>
      </div>

      <Section2 home={true}/>

      <Section3 home={true}/>
    </>
  );
}