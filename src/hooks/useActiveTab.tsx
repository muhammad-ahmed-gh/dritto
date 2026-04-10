import { useContext } from "react";
import { ActiveTabContext } from "../context/ActiveTabContext";

export const useActiveTab = function () {
  const activeTab = useContext(ActiveTabContext);
  if (!activeTab) throw new Error("ERROR: invalid active tab value");
  return activeTab;
};