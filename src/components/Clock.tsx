import { useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  let hours = date.getHours() === 0?
  "12" :
  date.getHours() > 12?
  `${date.getHours() - 12}`:
  `${date.getHours()}`;

  hours = hours.length === 1? `0${hours}` : hours;

  const minutes = date.getMinutes();
  const isAM = date.getHours() < 12;

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="clock w-[170px] h-[170px] flex justify-center items-center rounded-full border-[3px] border-[#32f461] mx-auto relative mt-[20px]">
      <div className="container flex flex-col justify-center items-center">
        <span className="hours text-[50px] leading-[55px] font-bold">{hours}</span>
        <span className="minutes text-[50px] leading-[55px] font-bold">{minutes}</span>
        <span className="am absolute right-[24px] bottom-[33px]">{isAM? "AM" : "PM"}</span>
      </div>
    </div>
  );
}
