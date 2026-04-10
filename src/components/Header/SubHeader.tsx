import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubTab } from "../../types/tabs";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import controlsConfig, { OptionConfig } from "../../data/controlsConfig";
import Toggle from "../UI/Toggle";
import { useState } from "react";
import { useActiveSubTab } from "../../hooks/useActiveSubTab";
import { useAppData } from "../../hooks/useAppData";

const getSubTabData = function (subTab: SubTab): OptionConfig | null {
  let data: OptionConfig | null = null;

  controlsConfig.categories.forEach((category) => {
    category.options.forEach((option) => {
      if (option.optionCode === subTab) data = option;
    });
  });
  return data;
};

export default function SubHeader() {
  const activeSubTab = useActiveSubTab();
  const userData = useAppData();

  const [subTabData] = useState(
    getSubTabData(activeSubTab.value),
  );

  return (
    <header className="flex justify-between items-center bg-surface text-text-muted h-[50px] px-[10px] border-b border-border-light">
      <div className="flex items-center gap-[5px]">
        <button
          className="w-[30px] h-[30px] rounded-[5px] transition-colors duration-300 cursor-pointer hover:bg-[#f1f1f1] "
          onClick={() => activeSubTab.setValue("None")}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <h1 className="font-bold text-[17px] capitalize">
          {subTabData?.label}
        </h1>
      </div>
      {subTabData?.isTogglable ? (
        <Toggle
          isActive={userData.value.controls.blockByDomain.enabled}
        />
      ) : null}
    </header>
  );
}
