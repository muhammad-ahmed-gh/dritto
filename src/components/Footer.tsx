import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab, StateSetter } from "../types/navigation";
import buttonsData from "../data/footerButtons";

type FooterProps = {
  activeTab: Tab;
  setActiveTab: StateSetter<Tab>;
};

export default function Footer(props: FooterProps) {
  return (
    <footer className="bg-surface py-[10px] px-[20px] flex justify-evenly items-center">
      {buttonsData.map((buttonData) => (
        <div
          key={buttonData.label}
          className="flex flex-col justify-center items-center gap-y-[5px]"
        >
          <button
            className={`flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer transition-[background-color] duration-300 ${buttonData.tabName === props.activeTab ? "text-white bg-primary hover:bg-[#2cdd58]" : "text-text-muted hover:bg-[#f1f1f1]"}`}
            onClick={() => props.setActiveTab(buttonData.tabName)}
          >
            <FontAwesomeIcon icon={buttonData.icon} />
          </button>

          <span className="text-[13px] capitalize text-text-muted">
            {buttonData.label}
          </span>
        </div>
      ))}
    </footer>
  );
}
