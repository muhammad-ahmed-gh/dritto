import { useState } from "react";
import { ActiveSectionContext } from "../context/ActiveSectionContext";
import { Children, Section } from "../types/general";

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
