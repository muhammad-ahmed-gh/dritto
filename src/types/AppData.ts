import { ControlsData } from "./ControlsData";
import { PomodoroData } from "./PomodoroData";
import { TasksData } from "./TasksData";
import { UIData } from "./UIData";

export type AppData = {
  tasks: TasksData;
  controls: ControlsData;
  pomodoro: PomodoroData;
  ui: UIData;
};
