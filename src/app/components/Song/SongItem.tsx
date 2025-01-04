import Link from "next/link";
import { FaHeart, FaPlay } from "react-icons/fa"

export const SongItem = (props: {item: any}) => {
  const { item } = props;

  return (
    <>
      <div className='bg-[#212121] py-[10px] pl-[10px] pr-[10.69px] flex items-center rounded-[15px] justify-between'>
        <div className="flex items-center gap-x-[10px]">
          <Link href={item.link} className='w-[76px] h-[76px] truncate rounded-[10px]'>
            <img  
              src={item.image}
              alt={item.title}
              className='w-full h-full aspect-square object-cover'
            />
          </Link>
          <div className='flex flex-col'>
            <Link href={item.link} className='text-white font-[600] text-[16px] leading-[19.2px] mb-[5px]'>
              {item.title}
            </Link>
            <span className='text-white font-[400] text-[12px] leading-[14.4px] opacity-[0.5] mb-[8px]'>
              {item.singer}
            </span>
            <span className='text-white font-[200] text-[12px] leading-[14.4px]'>
              {item.listen.toLocaleString()} lượt nghe
            </span>
          </div>
        </div>
        <div className='flex items-center gap-[10px]'>
          <span className='w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white ml-[10px] inner-button-play'>
            <FaPlay />
          </span>
          <span className='w-[34px] h-[34px] rounded-full border border-white inline-flex items-center justify-center text-[15px] text-white ml-[10px] inner-button-play'>
            <FaHeart />
          </span>
        </div>
      </div>
    </>
  )
}