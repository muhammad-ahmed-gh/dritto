import { createContext } from "react";
import { StateSetter, SubTab } from "../types/tabs";

type ActiveSubTabContextType = {
  value: SubTab;
  setValue: StateSetter<SubTab>;
};

export const ActiveSubTabContext =
  createContext<ActiveSubTabContextType | undefined>(undefined);
