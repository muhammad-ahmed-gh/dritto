import { createContext } from "react";
import { StateSetter, SubTab } from "../types/tabs";

type InputType = {
  value: SubTab,
  setValue: StateSetter<SubTab>
};

export const ActiveSubTabContext = createContext<InputType | null>(null);