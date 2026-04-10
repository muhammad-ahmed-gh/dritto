import MainHeader from "./Header/MainHeader";
import SubHeader from "./Header/SubHeader";
import { useActiveSubTab } from "../hooks/useActiveSubTab";

export default function Header() {
  const activeSubTab = useActiveSubTab();

  return activeSubTab.value === "None" ? <MainHeader /> : <SubHeader />;
}
