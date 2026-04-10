import { useEffect, useState } from "react";
import { AppDataContext } from "../context/AppDataContext";
import { Children } from "../types/Children";
import { AppData } from "../types/AppData";
import Loading from "../components/Loading";
import Error from "../components/Error";

export function AppDataProvider({ children }: { children: Children }) {
  const [appData, setAppData] = useState<AppData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    chrome.storage.local.get(["controls", "tasks", "pomodoro", "calendar", "ui"])
    .then(data => setAppData(data as AppData))
    .catch(error => {
      console.log("ERROR: Couldn't load user data correctly", error);
      setError("ERROR: Couldn't load user data correctly");
    })
  }, []);

  if(error) return <Error message={error} />;
  else if(!appData) return <Loading />

  return (
    <AppDataContext.Provider value={{value: appData, setValue: setAppData}}>
      {children}
    </AppDataContext.Provider>
  )
}
