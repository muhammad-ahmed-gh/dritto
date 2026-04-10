import About from "./About";
import Calendar from "./Calendar";
import Home from "./Home";
import Controls from "./Controls";
import Pomodoro from "./Pomodoro";
import Tasks from "./Tasks";
import { useActiveTab } from "../hooks/useActiveTab";

export function Content() {
  const activeTab = useActiveTab();

  switch (activeTab.value) {
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
  }
}
