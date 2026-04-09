export type TaskPriority = "Top" | "High" | "Medium" | "Low" | "No" | "Default";

export type TasksData = {
  name: string;
  start: Date;
  end: Date;
  priority: TaskPriority;
}[];
