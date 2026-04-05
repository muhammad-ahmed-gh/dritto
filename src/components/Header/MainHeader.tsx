import { StateSetter, MainTab } from "../../types/navigation";

type Props = {
  setActiveTab: StateSetter<MainTab>;
};

export default function MainHeader(props: Props) {
  return (
    <header className="flex justify-between items-center bg-surface h-[50px] px-[20px] border-b border-border-light">
      <h1 className="italic select-none cursor-pointer font-bold text-text-muted text-[17px]">
        Dritto
      </h1>
      <button
        type="button"
        className="text-text-muted cursor-pointer text-[14px]"
        onClick={() => props.setActiveTab("About")}
      >
        About
      </button>
    </header>
  );
}
