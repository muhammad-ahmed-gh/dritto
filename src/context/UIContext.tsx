import { createContext } from "react";
import { UIData } from "../types/UIData";
import { StateSetter } from "../types/tabs";

type InputType = {
  value: UIData | null;
  setValue: StateSetter<UIData | null>;
}

export const UIContext = createContext<InputType | null>(null);