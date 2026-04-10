import { useContext } from "react";
import { UserDataContext } from "../context/UserDataContext";

export function useUserData() {
  const userData = useContext(UserDataContext);
  if(!userData) throw new Error();
  return userData;
}