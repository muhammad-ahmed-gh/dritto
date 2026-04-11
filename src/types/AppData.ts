import { CalendarData } from "./CalendarData";
import { ControlsData } from "./ControlsData";
import { PomodoroData } from "./PomodoroData";
import { TasksData } from "./TasksData";
import { UIData } from "./UIData";

export type AppData = {
  ui: UIData;
  tasks: TasksData;
  controls: ControlsData;
  pomodoro: PomodoroData;
  calendar: CalendarData;
};
