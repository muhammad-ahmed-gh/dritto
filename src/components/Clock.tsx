import { useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());
  const hours =
    date.getHours() === 0
      ? 12
      : date.getHours() > 12
        ? date.getHours() - 12
        : date.getHours();

  const minutes = date.getMinutes();
  const isAM = date.getHours() < 12;

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="clock w-[170px] h-[170px] flex justify-center items-center rounded-full bg-gray-400 mx-auto relative">
      <div className="container flex flex-col justify-center items-center">
        <span className="hours text-white text-[50px] leading-[55px] font-bold">{hours}</span>
        <span className="minutes text-white text-[50px] leading-[55px] font-bold">{minutes}</span>
        <span className="am text-white absolute right-[30px] bottom-[33px]">{isAM? "AM" : "PM"}</span>
      </div>
    </div>
  );
}
