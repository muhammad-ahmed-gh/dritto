import About from "./About";
import Calendar from "./Calendar";
import Home from "./Home";
import Options from "./Options";
import Pomodoro from "./Pomodoro";
import Tasks from "./Tasks";

type Props = {
  activeTab: string;
}

export function Content(props: Props) {

  switch(props.activeTab) {
    case "Home":
      return <Home />
    case "Calendar":
      return <Calendar />
    case "Tasks":
      return <Tasks />
    case "Pomodoro":
      return <Pomodoro />
    case "Options":
      return <Options />
    case "About":
      return <About />
    default:
      return <main className="p-[20px] h-[350px]"></main>;
  }
}
