import { PlayInfo } from "./PlayInfo";
import { PlayAction } from "./PlayAction";
import { PlayTime } from "./PlayTime";
import { PlayVolumn } from "./PlayVolumn";

export const Play = () => {
  return (
    <>
      <div className="bg-[#212121] border-t border-[#494949] fixed bottom-0 w-full py-[20px] z-[999] hidden play-audio">
        <audio className="hidden inner-audio">
          <source src="/" />
        </audio>
        <div className="container mx-auto">
          <div className='flex gap-x-[67.4px] items-center'>
            <PlayInfo />

            <div className="flex flex-1 items-center flex-col gap-y-[11.23px]">
              <PlayAction />
              <PlayTime />
            </div>

            <PlayVolumn />
          </div>
        </div>
      </div>
    </>
  )
} 