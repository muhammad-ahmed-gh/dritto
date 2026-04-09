import { useContext } from "react";
import MainHeader from "./Header/MainHeader";
import SubHeader from "./Header/SubHeader";
import { ActiveSubTabContext } from "../context/ActiveSubTabContext";

export default function Header() {
  const activeSubTabContext = useContext(ActiveSubTabContext);

  return activeSubTabContext?.value === "None" ? (
    <MainHeader />
  ) : (
    <SubHeader />
  );
}
