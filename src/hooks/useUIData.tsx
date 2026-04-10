import { useContext } from "react";
import { UIDataContext } from "../context/UIDataContext";

export function useUIData() {
  const ui = useContext(UIDataContext);
  if (!ui) throw new Error();
  return ui;
}
