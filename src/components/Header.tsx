import { Tab, StateSetter } from "../types/navigation";

type Props = {
  setActiveTab: StateSetter<Tab>;
};

export default function Header(props: Props) {
  return (
    <header className="flex justify-between items-center bg-surface h-[50px] px-[20px] border-b border-border-light">
      <h1 className="italic select-none cursor-pointer font-bold text-text-dark text-[17px]">
        Dritto
      </h1>
      <button
        type="button"
        className="text-text-dark cursor-pointer text-[14px]"
        onClick={() => props.setActiveTab("About")}
      >
        About
      </button>
    </header>
  );
}
