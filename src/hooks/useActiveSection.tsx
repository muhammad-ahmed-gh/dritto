import { useContext } from "react";
import { ActiveSectionContext } from "../context/ActiveSectionContext";

export const useActiveSection = function () {
  const activeTab = useContext(ActiveSectionContext);
  if (!activeTab) throw new Error("ERROR: invalid active tab value");
  return activeTab;
};
