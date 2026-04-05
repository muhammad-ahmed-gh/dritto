import About from "./About";
import Calendar from "./Calendar";
import Home from "./Home";
import Controls from "./Controls";
import Pomodoro from "./Pomodoro";
import Tasks from "./Tasks";
import { StateSetter, SubTab, MainTab } from "../types/navigation";

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
      return (
        <Controls
          activeSubTab={props.activeSubTab}
          setActiveSubTab={props.setActiveSubTab}
        />
      );
    case "About":
      return <About />;
    default:
      return <main className="p-[20px] h-tab-height"></main>;
  }
}
