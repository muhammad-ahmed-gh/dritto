type Props = {
  date: Date;
}

export default function Clock(props: Props) {
  const hours = props.date.getHours();
  let hoursText: string;

  switch(true) {
    case hours === 0:
      hoursText = "12";
      break;
    case hours > 12:
      hoursText = `${hours - 12}`;
      break;
    default:
      hoursText = `${hours}`;
  }

  hoursText = hoursText.length === 1? `0${hoursText}` : hoursText;

  let minutes = `${props.date.getMinutes()}`;
  minutes = minutes.length === 1? `0${minutes}` : minutes;


  return (
    <div className="clock w-[170px] h-[170px] flex justify-center items-center rounded-full border-[3px] border-[#32f461] mx-auto relative mt-[20px]">
      <div className="container flex flex-col justify-center items-center">
        <span className="hours text-[50px] leading-[55px] font-bold">{hoursText}</span>
        <span className="minutes text-[50px] leading-[55px] font-bold">{minutes}</span>
        <span className="am absolute right-[24px] bottom-[33px]">{hours < 12? "AM" : "PM"}</span>
      </div>
    </div>
  );
}
