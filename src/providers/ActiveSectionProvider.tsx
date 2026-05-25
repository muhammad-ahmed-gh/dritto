import { useState } from "react";
import { Section } from "../types/tabs";
import { ActiveSectionContext } from "../context/ActiveSectionContext";
import { Children } from "../types/Children";

export function ActiveSectionProvider({ children }: { children: Children }) {
  const [activeSection, setActiveTab] = useState<Section>("Home");

  return (
    <ActiveSectionContext.Provider
      value={{ value: activeSection, setValue: setActiveTab }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}
