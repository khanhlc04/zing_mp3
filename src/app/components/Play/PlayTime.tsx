"use client";

export const PlayTime = () => {
  const handleChange = (event: any) => {
    const elementTotal = event.target;
    const value = parseFloat(elementTotal.value);

    const elementPlayAudio = document.querySelector(".play-audio");
    const elementAudio: any = elementPlayAudio?.querySelector(".inner-audio");

    if (elementAudio) {
      const elementPlayTimeCurrent: any = elementPlayAudio?.querySelector(".inner-play-time .inner-current");
      const elementPlayTimeTotal: any = elementPlayAudio?.querySelector(".inner-play-time .inner-total");

      const totalTime = elementAudio.duration;
      elementAudio.currentTime = value;
      const percent = value * 100 / totalTime;
      if (elementPlayTimeCurrent) {
        elementPlayTimeCurrent.style.width = `${percent}%`;
      }

      if (elementPlayTimeTotal) {
        elementPlayTimeTotal.max = totalTime;
        elementPlayTimeTotal.value = value;
      }
    }
  }
  return (
    <>
      <div className='w-full relative inner-play-time'>
        <div className="h-[4px] w-[0] bg-primary rounded-[50px] absolute left-0 top-[13px] inner-current"></div>
        <input
          type="range"
          min={0}
          max={0}
          defaultValue={0}
          className='w-full h-[4px] text-primary bg-[#2A2A2A] appearance-none rounded-[50px] cursor-pointer range-sm inner-total'
          onChange={event => handleChange(event)}
        />
      </div>
    </>
  )
}