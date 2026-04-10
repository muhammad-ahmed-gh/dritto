import { useContext } from "react";
import { AppDataContext } from "../context/AppDataContext";

export function useAppData() {
  const appData = useContext(AppDataContext);
  if(!appData) throw new Error("ERROR: Recieved invalid app data");
  return appData;
}