import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContentContainer from "../ui/ContentContainer";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useAppData } from "../../hooks/useAppData";
import ToggleButton from "../ui/ToggleButton";
import { useActiveSection } from "../../hooks/useActiveSection";

export default function TabsSection() {
  const appData = useAppData();
  const activeSection = useActiveSection();

  const handleEnableClick = () => {
    appData.setValue({
      ...appData.value,
      userSettings: {
        ...appData.value.userSettings,
        tabs: {
          ...appData.value.userSettings.tabs,
          enabled: !appData.value.userSettings.tabs.enabled,
        },
      },
    });
  };

  const handleBackButton = () => {
    activeSection.setValue("Home");
  }

  return (
    <ContentContainer>
      <div className="flex justify-between items-center">
        <div className="flex gap-[5px] items-center text-text-dark">
          <span className="cursor-pointer" onClick={handleBackButton}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <h2 className="font-bold">Tabs</h2>
        </div>
        <ToggleButton
          on={appData.value.userSettings.tabs.enabled}
          handleClick={handleEnableClick}
        />
      </div>
    </ContentContainer>
  );
}

