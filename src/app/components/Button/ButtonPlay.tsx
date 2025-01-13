"use client";

import { useEffect } from "react";
import { FaPause, FaPlay } from "react-icons/fa"

/* eslint-disable @typescript-eslint/no-explicit-any */
export const ButtonPlay = (props: {
  item: any,
  className: string
}) => {
  const { item, className } = props;

  const elementPlayAudio = document.querySelector(".play-audio");
  const elementAudio: any = elementPlayAudio?.querySelector(".inner-audio");
  const elementSource = elementAudio?.querySelector("source");

  const elementButtonPlay = elementPlayAudio?.querySelector(".inner-button-play");

  useEffect(() => {
    const elementSong = document.querySelector(`[song-id="${item.id}"]`);
    if(!elementAudio.paused && elementPlayAudio?.getAttribute("play-id") === elementSong?.getAttribute("song-id")){
      elementSong?.classList.add("active");
    }
  }, [])

  const handlePlay = () => {
    const audio = item.audio;

    if (elementSource) elementSource.src = audio;
    if (elementAudio) {
      // Hiện khối phát nhạc
      elementPlayAudio?.classList.remove("hidden");
      elementButtonPlay?.classList.add("active");

      //Bỏ trạng thái active của nút play
      const elementSongOld = document.querySelector("[song-id].active");
      if (elementSongOld) elementSongOld?.classList.remove("active");

      const elementSong = document.querySelector(`[song-id="${item.id}"]`);
      // Phát nhạc mới khi ấn phát bài hát khác bài hát trong khối nhạc
      if(elementSongOld !== elementSong && elementSong?.getAttribute("song-id") !== elementPlayAudio?.getAttribute("play-id")){
        elementAudio.load();
        elementAudio.play();
        elementSong?.classList.add("active");
        // Tiếp tục phát nhạc khi ấn phát bài hát giống bài hát trong khối nhạc
      } else if (elementSongOld !== elementSong && elementSong?.getAttribute("song-id") === elementPlayAudio?.getAttribute("play-id")) {
        elementAudio.play();
        elementSong?.classList.add("active");
        // Dừng phát nhạc khi ấn phát bài hát giống bài hát trong khối nhạc
      } else {
        elementAudio.pause();
        elementButtonPlay?.classList.remove("active");
      }

      // Set thuộc tính play-id cho khối nhạc 
      elementPlayAudio?.setAttribute("play-id", item.id);

      const elementImage: any = elementPlayAudio?.querySelector(".inner-image");
      if (elementImage) elementImage.src = item.image;

      const elementTitle: any = elementPlayAudio?.querySelector(".inner-title");
      if (elementTitle) elementTitle.innerHTML = item.title

      const elementSinger: any = elementPlayAudio?.querySelector(".inner-singer");
      if (elementSinger) {
        elementSinger.innerHTML = item.singer;
      }

      const elementPlayTimeCurrent: any = elementPlayAudio?.querySelector(".inner-play-time .inner-current");
      const elementPlayTimeTotal: any = elementPlayAudio?.querySelector(".inner-play-time .inner-total");

      elementAudio.onloadedmetadata = () => {
        const totalTime = elementAudio.duration;

        elementAudio.ontimeupdate = () => {
          const currentTime = elementAudio.currentTime;
          const percent = currentTime * 100 / totalTime;
          if (elementPlayTimeCurrent) {
            elementPlayTimeCurrent.style.width = `${percent}%`;
          }

          if (elementPlayTimeTotal) {
            elementPlayTimeTotal.max = totalTime;
            elementPlayTimeTotal.value = currentTime;
          }
        }

        elementAudio.onended = () => {
          if (elementSong) {
            const nextSong = elementSong.nextElementSibling;
            if (nextSong) {
              const buttonPlay: any = nextSong.querySelector(".inner-button-play");
              buttonPlay?.click();
      
              const buttonPlay2: any = nextSong.querySelector(".inner-button-play-2");
              buttonPlay2?.click();
            } else {
              const firstSong = elementSong.parentElement?.firstElementChild;
              if (firstSong) {
                const buttonPlay: any = firstSong.querySelector(".inner-button-play");
                buttonPlay?.click();
      
                const buttonPlay2: any = firstSong.querySelector(".inner-button-play-2");
                buttonPlay2?.click();
              }
            }
          }
        }
      }
    }
 }

  return (
    <>
      <button
        className={className}
        onClick={handlePlay}
      >
        <FaPlay className="pl-[2px] inner-icon-play" />
        <FaPause className="inner-icon-pause" />
      </button>
    </>
  )
}