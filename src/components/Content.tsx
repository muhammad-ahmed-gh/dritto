import { useState } from "react";
import Clock from "./Clock";

export function Content() {
  const [date, setDate] = useState(new Date());
  const hour = date.getHours();
  const greeting = hour < 5?
  "Good night":
  hour < 12?
  "Good morning":
  hour < 18?
  "Good afternoon":
  hour < 22?
  "Good evening":
  "Good night";

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <main className="p-[20px] h-[350px]">
      {greeting}
      <Clock />
    </main>
  );
}
