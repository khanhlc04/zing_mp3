"use client";

import { FaPause, FaPlay } from "react-icons/fa"

export const ButtonPlay = (props: {
  item: any,
  className: string
}) => {
  const { item, className } = props;

  const handlePlay = () => {
    const audio = item.audio;

    const elementPlayAudio = document.querySelector(".play-audio");
    const elementAudio: any = elementPlayAudio?.querySelector(".inner-audio");
    const elementSource = elementAudio?.querySelector("source");
    if (elementSource) elementSource.src = audio;
    if (elementAudio) {
      elementPlayAudio?.classList.remove("hidden");
      elementAudio.load();
      elementAudio.play();

      const elementButtonPlay = elementPlayAudio?.querySelector(".inner-button-play");

      elementButtonPlay?.classList.add("active");

      const elementButtonPlay2 = elementPlayAudio?.querySelector(".inner-button-play-2");

      elementButtonPlay2?.classList.add("active");

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
      }

      const elementSongOld = document.querySelector("[song-id].active");
      if (elementSongOld) elementSongOld?.classList.remove("active");

      const elementSong = document.querySelector(`[song-id="${item.id}"]`);
      elementSong?.classList.add("active");
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