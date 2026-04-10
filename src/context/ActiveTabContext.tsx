import { createContext } from "react";
import { MainTab, StateSetter } from "../types/tabs";

type ActiveTabContextType = {
  value: MainTab;
  setValue: StateSetter<MainTab>;
};

export const ActiveTabContext = createContext<ActiveTabContextType | undefined>(
  undefined,
);
