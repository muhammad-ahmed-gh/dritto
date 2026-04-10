import { useActiveTab } from "../../hooks/useActiveTab";

export default function MainHeader() {
  const activeTab = useActiveTab();

  return (
    <header className="flex justify-between items-center bg-surface h-[50px] px-[20px] border-b border-border-light">
      <h1 className="italic select-none cursor-pointer font-bold text-text-muted text-[17px]">
        Dritto
      </h1>
      <button
        type="button"
        className="text-text-muted cursor-pointer text-[14px]"
        onClick={() => activeTab.setValue("About")}
      >
        About
      </button>
    </header>
  );
}
