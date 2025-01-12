import Link from "next/link";
import { ButtonPlay } from "../Button/ButtonPlay";
import { ButtonHeart } from "../Button/ButtonHeart";

export const SongItem2 = (props: { item: any }) => {
  const { item } = props;

  return (
    <>
      <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]" song-id={item.id}>
        <div className="w-[40%] flex items-center">
          <ButtonPlay 
            item={item} 
            className="text-white inner-button-play-2"
          />
          <div className="w-[42px] aspect-square rounded-[8px] truncate mx-[12px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-[700] text-[14px] text-white">
            <Link href={item.link}>
              {item.title}
            </Link>
          </div>
        </div>

        <div className="w-[30%] text-center">
          <div className="font-[400] text-[14px] text-white">
            {item.singer}
          </div>
        </div>

        <div className="w-[30%] flex items-center justify-end">
          <div className="font-[400] text-[14px] text-white mr-[18px]">
            {item.time}
          </div>
          <ButtonHeart item={item} className='text-[20px] inner-button-heart-2'/>
        </div>
      </div>
    </>
  )
}