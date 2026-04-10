import { ControlsData } from "./ControlsData";
import { PomodoroData } from "./PomodoroData";
import { TasksData } from "./TasksData";
import { UIData } from "./UIData";

export type UserData = {
  tasks: TasksData;
  controls: ControlsData;
  pomodoro: PomodoroData;
};

export type AppData = UserData & {
  ui: UIData;
};
