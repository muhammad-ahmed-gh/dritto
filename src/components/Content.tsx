import { useEffect, useState } from "react";
import Clock from "./Clock";

export function Content() {
  const [date, setDate] = useState(new Date());
  const hour = date.getHours();

  let greeting: string;
  switch(true) {
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
    <main className="p-[20px] h-[350px]">
      {greeting}
      <Clock date={date} />
      
      <span className="text-[14px] text-[#555] block text-center mt-[15px]">
        You have 2 pending tasks
      </span>
    </main>
  );
}
