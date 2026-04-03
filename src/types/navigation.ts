export type Tab = "Home" | "Calendar" | "Tasks" | "Pomodoro" | "Options" | "About";
export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;