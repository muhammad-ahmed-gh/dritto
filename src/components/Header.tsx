import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";

function Star(props: { indx: number }) {
  return (
    <span
      className={clsx(
        "relative text-[#eebf37]",
        (props.indx === 1 || props.indx === 5) && "text-[10px] top-[-6px]",
        (props.indx === 2 || props.indx === 4) && "text-[12px] top-[-1px]",
      )}
    >
      <FontAwesomeIcon icon={faStar} />
    </span>
  );
}

function Logo() {
  return (
    <div className="relative select-none cursor-pointer">
      <h1 className="font-bold text-[30px] text-text-dark">dritto</h1>
      <span className="stars absolute bottom-[-20px] left-1/2 translate-x-[-50%] flex justify-center gap-[3px]">
        <Star indx={1} />
        <Star indx={2} />
        <Star indx={3} />
        <Star indx={4} />
        <Star indx={5} />
      </span>
    </div>
  );
}

function ThemeButton() {
  const [theme, setTheme] = useState<"Light" | "Dark">("Light");
  const handleClick = () => {
    if (theme === "Light") setTheme("Dark");
    else setTheme("Light");
  };

  return (
    <div
      className="w-[30px] h-[30px] flex justify-center items-center rounded-[7px] border-1 border-text-dark cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-[17px] h-[17px] rounded-full bg-text-dark relative">
        <div
          className={clsx(
            "rounded-full bg-background absolute top-0 right-0 transition-[width_height] duration-200",
            theme === "Light" ? "w-[11px] h-[11px] " : "w-0 h-0",
          )}
        ></div>
      </div>
    </div>
  );
}

function LangButton() {
  const [lang, setLang] = useState<"AR" | "EN">("AR");

  const handleClick = () => {
    if (lang === "AR") setLang("EN");
    else setLang("AR");
  };

  return (
    <span
      onClick={handleClick}
      className="relative w-[30px] h-[30px] rounded-[7px] text-text-dark border-1 border-text-dark text-[14px] cursor-pointer select-none "
    >
      <span
        className={clsx(
          "absolute top-1/2 left-1/2 translate-[-50%] transition-opacity duration-200",
          lang === "AR" ? "opacity-0" : "opacity-100",
        )}
      >
        AR
      </span>
      <span
        className={clsx(
          "absolute top-1/2 left-1/2 translate-[-50%] transition-opacity duration-200",
          lang === "AR" ? "opacity-100" : "opacity-0",
        )}
      >
        EN
      </span>
    </span>
  );
}

export default function Header() {
  return (
    <header className="bg-background flex justify-between items-center p-main-padding">
      <ThemeButton />
      <Logo />
      <LangButton />
    </header>
  );
}
