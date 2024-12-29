import { FaStepBackward, FaStepForward, FaPlay } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";

export const Play = () => {
  return (
    <>
      <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 w-full py-[20px] z-[999]">
        <div className="container mx-auto">
          <div className='flex gap-x-[67.4px] items-center'>
            <div className='flex gap-[12.88px] items-center w-[218.42px]'>
              <img
                src="/demo/img1.jpg"
                alt="demo"
                className='rounded-[14px] w-[48.54px] h-[49px] object-fit'
              />
              <div className='flex flex-col gap-y-[2px]'>
                <span className='font-[700] text-[15px] leading-[18px] text-white'>
                  Cô Phòng
                </span>
                <span className='font-[700] text-[12px] leading-[14.4px] text-white opacity-[0.44]'>
                  Hồ Quang Hiếu, Huỳnh Văn
                </span>
              </div>
            </div>

            <div className="flex flex-1 items-center flex-col gap-y-[11.23px]">
              <div className="flex items-center gap-x-[52px]">
                <span className='text-white text-[16px]'>
                  <FaStepBackward />
                </span>
                <span className="text-[16px] text-white w-[32px] h-[32px] bg-primary rounded-full flex items-center justify-center">
                  <FaPlay />
                </span>
                <span className='text-white text-[16px]'>
                  <FaStepForward />
                </span>
              </div>
              <div className='w-full relative'>
                <div className="h-[4px] w-[80%] bg-primary rounded-[50px] absolute left-0 top-[13px]"></div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={80}
                  className='w-full h-[4px] text-primary bg-[#2A2A2A] appearance-none rounded-[50px] cursor-pointer range-sm'
                />
              </div>
            </div>

            <div className='w-[184.72px] flex gap-[6px] items-end'>
              <span className='text-white text-[16px]'>
                <FaVolumeHigh />
              </span>
              <div className='w-full h-[fit-content] relative'>
                <div className="h-[3px] w-[80%] bg-primary rounded-[50px] absolute left-0 top-[14px]"></div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  defaultValue={80}
                  className='w-full h-[3px] text-primary bg-[#2A2A2A] appearance-none rounded-[50px] cursor-pointer range-sm'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
} 