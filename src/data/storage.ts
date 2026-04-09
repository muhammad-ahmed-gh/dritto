import { ControlsData } from "../types/ControlsData";
import { PomodoroData } from "../types/PomodoroData";
import { TasksData } from "../types/TasksData";
import { UIData } from "../types/UIData";

export async function loadControlsData() {
  const data = await chrome.storage.local.get(["controls"]);
  return data.controls as ControlsData;
}

export async function loadTasksData() {
  const data = await chrome.storage.local.get(["tasks"]);
  return data.tasks as TasksData;
}

export async function loadPomodoroData() {
  const data = await chrome.storage.local.get(["pomodoro"]);
  return data.pomodoro as PomodoroData;
}

export async function loadUIData() {
  const data = await chrome.storage.local.get(["ui"]);
  return data.ui as UIData;
}
