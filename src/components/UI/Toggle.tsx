import clsx from "clsx";
import { useState } from "react";

type Props = {
  isActive: boolean;
};

export default function Toggle(props: Props) {
  const [isActive, setIsActive] = useState(props.isActive);

  return (
    <div
      className={clsx(
        "relative w-[40px] h-[20px] rounded-full before:w-[12px] before:h-[12px] before:rounded-full before:bg-white before:absolute before:top-[50%] before:transform-[translateY(-50%)] before:right-[3px] cursor-pointer before:transition-left before:duration-300 ",
        isActive
          ? "bg-primary before:left-[calc(100%-12px-3px)]"
          : "bg-[#bbb] before:left-[3px]",
      )}
      onClick={() => setIsActive((prev) => !prev)}
    ></div>
  );
}
