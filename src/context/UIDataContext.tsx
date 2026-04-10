import { createContext } from "react";
import { UIData } from "../types/UIData";
import { StateSetter } from "../types/tabs";

type UIDataContextType = {
  value: UIData;
  setValue: StateSetter<UIData | null>;
};

export const UIDataContext = createContext<UIDataContextType | undefined>(
  undefined,
);
