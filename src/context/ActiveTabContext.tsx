import { createContext } from "react";
import { MainTab, StateSetter } from "../types/tabs";

type InputType = {
  value: MainTab;
  setValue: StateSetter<MainTab>;
}

export const ActiveTabContext = createContext<InputType | null>(null);
