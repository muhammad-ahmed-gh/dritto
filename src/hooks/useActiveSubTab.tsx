import { useContext } from "react";
import { ActiveSubTabContext } from "../context/ActiveSubTabContext";

export function useActiveSubTab() {
  const activeSubTab = useContext(ActiveSubTabContext);
  if(!activeSubTab) throw new Error("ERROR: invalid active sub-tab value");
  return activeSubTab;
}