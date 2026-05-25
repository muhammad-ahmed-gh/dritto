import { createContext } from "react";
import { Section, StateSetter } from "../types/general";

type ActiveSectionContextType = {
  value: Section;
  setValue: StateSetter<Section>;
};

export const ActiveSectionContext = createContext<
  ActiveSectionContextType | undefined
>(undefined);
