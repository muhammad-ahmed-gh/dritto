import { useContext } from "react";
import { ActiveSectionContext } from "../context/ActiveSectionContext";

export const useActiveTab = function () {
  const activeTab = useContext(ActiveSectionContext);
  if (!activeTab) throw new Error("ERROR: invalid active tab value");
  return activeTab;
};
