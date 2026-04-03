import {
  faCalendar,
  faCheck,
  faHouse,
  faClock,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { Tab } from "../types/navigation";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonsData = { icon: IconProp; label: string; tabName: Tab }[];

const buttonsData: ButtonsData = [
  { icon: faCalendar, label: "calendar", tabName: "Calendar" },
  { icon: faCheck, label: "tasks", tabName: "Tasks" },
  { icon: faHouse, label: "home", tabName: "Home" },
  { icon: faClock, label: "sessions", tabName: "Pomodoro" },
  { icon: faSliders, label: "controls", tabName: "Controls" },
];

export default buttonsData;
