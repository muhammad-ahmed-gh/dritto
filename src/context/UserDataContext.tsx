import { createContext } from "react";
import { UserData } from "../types/AppData";
import { StateSetter } from "../types/tabs";

type UserDataContextType = {
  value: UserData;
  setValue: StateSetter<UserData | null>;
};

export const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined,
);
