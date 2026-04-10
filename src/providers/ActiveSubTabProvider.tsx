import { useState } from "react";
import { ActiveSubTabContext } from "../context/ActiveSubTabContext";
import { Children } from "../types/Children";
import { SubTab } from "../types/tabs";

export function ActiveSubTabProvider({ children }: { children: Children }) {
  const [activeSubTab, setActiveSubTab] = useState<SubTab>("None");

  return (
    <ActiveSubTabContext.Provider
      value={{ value: activeSubTab, setValue: setActiveSubTab }}
    >
      {children}
    </ActiveSubTabContext.Provider>
  );
}
