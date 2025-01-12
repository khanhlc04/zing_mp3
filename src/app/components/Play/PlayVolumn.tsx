"use client";

import { FaVolumeHigh } from "react-icons/fa6"

export const PlayVolumn = () => {
  const handleChange = (event: any) => {
    const elementTotal = event.target;
    const value = parseFloat(elementTotal.value);

    const elementPlayAudio = document.querySelector(".play-audio");
    const elementAudio: any = elementPlayAudio?.querySelector(".inner-audio");

    if (elementAudio) {
      const elementVolumnCurrent: any = elementPlayAudio?.querySelector(".inner-volumn .inner-current");
      const elementVolumnTotal: any = elementPlayAudio?.querySelector(".inner-volumn .inner-total");

      elementAudio.volume = value / 100;

      if (elementVolumnCurrent) {
        elementVolumnCurrent.style.width = `${value}%`;
      }

      if (elementVolumnTotal) {
        elementVolumnTotal.value = value;
      }
    }
  }

  return (
    <>
      <div className='w-[184.72px] flex gap-[6px] items-end inner-volumn'>
        <span className='text-white text-[16px]'>
          <FaVolumeHigh />
        </span>
        <div className='w-full h-[fit-content] relative'>
          <div className="h-[3px] w-[100%] bg-primary rounded-[50px] absolute left-0 top-[14px] inner-current"></div>
          <input
            type="range"
            min={0}
            max={100}
            defaultValue={100}
            className='w-full h-[3px] text-primary bg-[#2A2A2A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total'
            onChange={event => handleChange(event)}
          />
        </div>
      </div>
    </>
  )
}