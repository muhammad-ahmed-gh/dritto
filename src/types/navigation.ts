export type Tab = "Home" | "Calendar" | "Tasks" | "Pomodoro" | "Controls" | "About";
export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;