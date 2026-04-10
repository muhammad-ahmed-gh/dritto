import { useEffect, useState } from "react";
import { UIDataContext } from "../context/UIDataContext";
import { Children } from "../types/Children";
import { UIData } from "../types/UIData";
import Loading from "../components/Loading";

export function UIDataProvider({ children }: { children: Children }) {
  const [ui, setUI] = useState<UIData | null>(null);

  useEffect(() => {
    chrome.storage.local.get("ui").then((data) => {
      setUI(data.ui as UIData | null);
    });
  }, []);

  if (!ui) return <Loading />;

  return (
    <UIDataContext.Provider value={{ value: ui, setValue: setUI }}>
      {children}
    </UIDataContext.Provider>
  );
}
