import { createContext } from "react";
import { StateSetter } from "../types/general";
import { Section } from "../types/Sections";

type ActiveSectionContextType = {
  value: Section;
  setValue: StateSetter<Section>;
};

export const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);
