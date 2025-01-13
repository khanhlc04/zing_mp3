"use client";

import { FaPause, FaPlay, FaStepBackward, FaStepForward } from "react-icons/fa"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const PlayAction = () => {
  const handlePlay = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    const elementAudio: any = elementPlayAudio?.querySelector(".inner-audio");
    if (elementAudio) {
      const elementButtonPlay = elementPlayAudio?.querySelector(".inner-button-play");

      elementButtonPlay?.classList.toggle("active");

      const playId = elementPlayAudio?.getAttribute("play-id");
      const currentSong = document.querySelector(`[song-id="${playId}"]`);

      if (elementAudio.paused) {
        currentSong?.classList.add("active");
        elementAudio.play();
      } else {
        currentSong?.classList.remove("active");
        elementAudio.pause();
      }
    }
  }

  const handleBackward = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    const elementButtonPlay = elementPlayAudio?.querySelector(".inner-button-play");

    elementButtonPlay?.classList.toggle("active");

    const playId = elementPlayAudio?.getAttribute("play-id");
    const currentSong = document.querySelector(`[song-id="${playId}"]`);
    if (currentSong) {
      const previousSong: any = currentSong.previousSibling;
      if (previousSong) {
        const buttonPlay: any = previousSong.querySelector(".inner-button-play");
        buttonPlay?.click();

        const buttonPlay2: any = previousSong.querySelector(".inner-button-play-2");
        buttonPlay2?.click();
      } else {
        const firstSong = currentSong.parentElement?.lastElementChild;
        if (firstSong) {
          const buttonPlay: any = firstSong.querySelector(".inner-button-play");
          buttonPlay?.click();

          const buttonPlay2: any = firstSong.querySelector(".inner-button-play-2");
          buttonPlay2?.click();
        }
      }
    }
  }

  const handleForward = () => {
    const elementPlayAudio = document.querySelector(".play-audio");
    const elementButtonPlay = elementPlayAudio?.querySelector(".inner-button-play");

    elementButtonPlay?.classList.toggle("active");

    const playId = elementPlayAudio?.getAttribute("play-id");
    const currentSong = document.querySelector(`[song-id="${playId}"]`);
    if (currentSong) {
      const nextSong = currentSong.nextElementSibling;
      if (nextSong) {
        const buttonPlay: any = nextSong.querySelector(".inner-button-play");
        buttonPlay?.click();

        const buttonPlay2: any = nextSong.querySelector(".inner-button-play-2");
        buttonPlay2?.click();
      } else {
        const firstSong = currentSong.parentElement?.firstElementChild;
        if (firstSong) {
          const buttonPlay: any = firstSong.querySelector(".inner-button-play");
          buttonPlay?.click();

          const buttonPlay2: any = firstSong.querySelector(".inner-button-play-2");
          buttonPlay2?.click();
        }
      }
    }
  }

  return (
    <>
      <div className="flex items-center gap-x-[52px]">
        <span
          className='text-white text-[16px] cursor-pointer'
          onClick={handleBackward}
        >
          <FaStepBackward />
        </span>
        <span
          className="text-[16px] text-white w-[32px] h-[32px] bg-primary rounded-full flex items-center justify-center cursor-pointer inner-button-play"
          onClick={handlePlay}
        >
          <FaPlay
            className="pl-[2px] inner-icon-play"
          />
          <FaPause
            className="inner-icon-pause"
          />
        </span>
        <span
          className='text-white text-[16px] cursor-pointer'
          onClick={handleForward}
        >
          <FaStepForward />
        </span>
      </div>
    </>
  )
}