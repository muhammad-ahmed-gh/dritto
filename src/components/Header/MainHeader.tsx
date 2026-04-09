import { useContext } from "react";
import { ActiveTabContext } from "../../context/ActiveTabContext";

export default function MainHeader() {
  const activeTabContext = useContext(ActiveTabContext);

  return (
    <header className="flex justify-between items-center bg-surface h-[50px] px-[20px] border-b border-border-light">
      <h1 className="italic select-none cursor-pointer font-bold text-text-muted text-[17px]">
        Dritto
      </h1>
      <button
        type="button"
        className="text-text-muted cursor-pointer text-[14px]"
        onClick={() => activeTabContext?.setValue("About")}
      >
        About
      </button>
    </header>
  );
}
