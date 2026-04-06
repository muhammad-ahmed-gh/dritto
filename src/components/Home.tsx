import { useState, useEffect } from "react";
import Clock from "./Clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [date, setDate] = useState(new Date());
  const hour = date.getHours();

  let greeting: string;
  switch (true) {
    case hour < 5:
      greeting = "Good night";
      break;
    case hour < 12:
      greeting = "Good morning";
      break;
    case hour < 18:
      greeting = "Good afternoon";
      break;
    case hour < 22:
      greeting = "Good evening";
      break;
    default:
      greeting = "Good night";
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="p-[20px] h-tab-height">
      {greeting}
      <Clock time={date} />

      <p className="text-[14px] text-text-muted block text-center mt-[20px]">
        You have 2 pending tasks
      </p>

      <button
        type="button"
        className="flex justify-center items-center mx-auto mt-[20px] text-primary w-[35px] h-[35px] rounded-full bg-white hover:bg-[#fafafa] transition-colors duration-300 animate-bounce cursor-pointer border-[#e5e5e5] border [animation-duration:2s] "
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </main>
  );
}
