import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StateSetter, SubTab } from "../../types/navigation";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import controlsConfig from "../../data/controlsConfig";

type Props = {
  activeSubTab: SubTab;
  setActiveSubTab: StateSetter<SubTab>;
};

const subTabToLabel = function (subTab: SubTab) {
  let label = "Unknown Label";
  controlsConfig.categories.forEach((category) => {
    category.options.forEach((option) => {
      if (option.optionCode === subTab) label = option.label;
    });
  });
  return label;
};

export default function SubHeader(props: Props) {
  return (
    <header className="flex items-center gap-[5px] bg-surface text-text-muted h-[50px] px-[10px] border-b border-border-light">
      <button
        className="w-[30px] h-[30px] rounded-[5px] transition-colors duration-300 cursor-pointer hover:bg-[#f1f1f1] "
        onClick={() => props.setActiveSubTab("None")}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <h1 className="font-bold text-[17px] capitalize">
        {subTabToLabel(props.activeSubTab)}
      </h1>
    </header>
  );
}
