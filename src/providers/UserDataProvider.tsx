import { useEffect, useState } from "react";
import { UserData } from "../types/AppData";
import { UserDataContext } from "../context/UserDataContext";
import { Children } from "../types/Children";
import Loading from "../components/Loading";

export function UserDataProvider({ children }: { children: Children }) {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    chrome.storage.local.get(["controls", "tasks", "calendar", "pomodoro"])
    .then(data => setUserData(data as UserData));
  }, []);

  if(!userData) return <Loading />

  return (
    <UserDataContext.Provider
      value={{ value: userData, setValue: setUserData }}
    >
      {children}
    </UserDataContext.Provider>
  );
}
