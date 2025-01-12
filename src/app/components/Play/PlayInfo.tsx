"use client";

export const PlayInfo = () => {
  return(
    <>
      <div className='flex gap-[12.88px] items-center w-[218.42px]'>
        <div className="w-[49px] aspect-square rounded-[14px] truncate">
          <img
            src="/demo/image_1.png"
            alt="demo"
            className='w-full h-full object-cover inner-image'
          />
        </div>
        <div className='flex flex-col gap-y-[2px]'>
          <span className='font-[700] text-[15px] leading-[18px] text-white line-clamp-1 inner-title'></span>
          <span className='font-[700] text-[12px] leading-[14.4px] text-white opacity-[0.44] line-clamp-1 inner-singer'></span>
        </div>
      </div>
    </>
  )
}