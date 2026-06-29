import { useEffect, useState } from "react";
import { AppDataContext } from "../context/AppDataContext";
import { Children } from "../types/general";
import { AppData } from "../types/AppData";
import Loading from "../components/Loading";
import Error from "../components/Error";

/*
  provides the data of the app including
  theme, language, and user customizations
*/
export function AppDataProvider({ children }: { children: Children }) {
  const [appData, setAppData] = useState<AppData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    chrome.storage.local
      .get(["appearance", "lang", "userSettings"])
      .then((data) => {
        if (
          !("appearance" in data) ||
          !("lang" in data) ||
          !("userSettings" in data)
        ) {
          setError("ERROR: Couldn't load app data correctly");
        } else {
          setAppData(data as AppData);
        }
      })
      .catch((error) => {
        console.log("ERROR: An error occurred while fetching app data", error);
        setError("ERROR: An error occurred while fetching app data");
      });
  }, []);

  if (error) return <Error message={error} />;
  else if (!appData) return <Loading />;

  return (
    <AppDataContext.Provider value={{ value: appData, setValue: setAppData }}>
      {children}
    </AppDataContext.Provider>
  );
}
