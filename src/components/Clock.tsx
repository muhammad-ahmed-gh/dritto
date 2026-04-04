type Props = {
  date: Date;
};

export default function Clock(props: Props) {
  let hours = props.date.getHours();
  hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
  const hoursDigit1 = Math.trunc(hours / 10) % 10;
  const hoursDigit2 = hours % 10;
  
  const minutes = props.date.getMinutes();
  const minutesDigit1 = Math.trunc(minutes / 10) % 10;
  const minutesDigit2 = minutes % 10;


  return (
    <div className="clock w-[170px] h-[170px] flex justify-center items-center rounded-full border-[3px] border-primary mx-auto relative mt-[20px] select-none cursor-pointer transition-colors duration-300 hover:bg-surface-soft">
      <div className="container flex flex-col justify-center items-center">
        <span className="hours text-[50px] leading-[55px] font-bold">
          <span className="digit w-[34px] text-center inline-block">{hoursDigit1}</span>
          <span className="digit w-[34px] text-center inline-block">{hoursDigit2}</span>
        </span>
        <span className="minutes text-[50px] leading-[55px] font-bold">
          <span className="digit w-[34px] text-center inline-block">{minutesDigit1}</span>
          <span className="digit w-[34px] text-center inline-block">{minutesDigit2}</span>
        </span>
        <span className="am absolute right-[20px] bottom-[33px]">
          {hours < 12 ? "AM" : "PM"}
        </span>
      </div>
    </div>
  );
}
