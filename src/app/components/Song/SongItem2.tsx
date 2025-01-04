import Link from "next/link";
import { FaPlay, FaRegHeart } from "react-icons/fa"

export const SongItem2 = (props: { item: any }) => {
  const { item } = props;

  return (
    <>
      <div className="flex items-center justify-between bg-[#212121] py-[10px] px-[18px] rounded-[15px]">
        <div className="w-[40%] flex items-center">
          <FaPlay className='text-white' />
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
          <button className="text-[20px] text-white">
            <FaRegHeart />
          </button>
        </div>
      </div>
    </>
  )
}