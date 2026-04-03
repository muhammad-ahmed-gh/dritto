import { Tab, StateSetter } from "../types/navigation";

type Props = {
  setActiveTab: StateSetter<Tab>;
};

export default function Header(props: Props) {
  return (
    <header className="flex justify-between items-center bg-white h-[50px] px-[20px] border-b border-[#eee]">
      <h1 className="italic select-none cursor-pointer font-bold text-[#666] text-[17px]">
        Dritto
      </h1>
      <button
        type="button"
        className="text-[#666] cursor-pointer text-[14px]"
        onClick={() => props.setActiveTab("About")}
      >
        About
      </button>
    </header>
  );
}
