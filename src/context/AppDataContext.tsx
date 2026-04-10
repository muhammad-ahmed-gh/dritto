import { createContext } from "react";
import { AppData } from "../types/AppData";
import { StateSetter } from "../types/tabs";

type AppDataContextType = {
  value: AppData;
  setValue: StateSetter<AppData | null>;
}

export const AppDataContext = createContext<AppDataContextType | undefined>(undefined);
