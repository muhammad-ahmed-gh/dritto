import { useContext } from "react";
import { ActiveSubTabContext } from "../context/ActiveSubTabContext";

export function useActiveSubTab() {
  const activeSubTab = useContext(ActiveSubTabContext);
  if(!activeSubTab) throw new Error();
  return activeSubTab;
}