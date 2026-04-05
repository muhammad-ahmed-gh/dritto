import { MainTab, StateSetter, SubTab } from "../types/navigation";
import MainHeader from "./Header/MainHeader";
import SubHeader from "./Header/SubHeader";

type Props = {
  activeSubTab: SubTab;
  setActiveTab: StateSetter<MainTab>;
  setActiveSubTab: StateSetter<SubTab>;
};

export default function Header(props: Props) {
  return props.activeSubTab === "None" ? (
    <MainHeader setActiveTab={props.setActiveTab} />
  ) : (
    <SubHeader
      activeSubTab={props.activeSubTab}
      setActiveSubTab={props.setActiveSubTab}
    />
  );
}
