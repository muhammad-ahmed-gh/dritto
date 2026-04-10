import { useState } from "react";
import { MainTab } from "../types/tabs";
import { ActiveTabContext } from "../context/ActiveTabContext";
import { Children } from "../types/Children";

export function ActiveTabContextProvider({ children }: { children: Children }) {
  const [activeTab, setActiveTab] = useState<MainTab>("Home");

  return (
    <ActiveTabContext.Provider
      value={{ value: activeTab, setValue: setActiveTab }}
    >
      {children}
    </ActiveTabContext.Provider>
  );
}
