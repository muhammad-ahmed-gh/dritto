import About from "./About";
import Calendar from "./Calendar";
import Home from "./Home";
import Controls from "./Controls";
import Pomodoro from "./Pomodoro";
import Tasks from "./Tasks";
import { StateSetter, SubTab, MainTab } from "../types/tabs";

type Props = {
  activeTab: MainTab;
  activeSubTab: SubTab;
  setActiveSubTab: StateSetter<SubTab>;
};

export function Content(props: Props) {
  switch (props.activeTab) {
    case "Home":
      return <Home />;
    case "Calendar":
      return <Calendar />;
    case "Tasks":
      return <Tasks />;
    case "Pomodoro":
      return <Pomodoro />;
    case "Controls":
      return <Controls />;
    case "About":
      return <About />;
    default:
      return <main className="p-[20px] h-tab-height"></main>;
  }
}
