export type CalendarEventColor =
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "cyan"
  | "pink"
  | "purple"
  | "gray"
  | "white";

export type CalendarEvent = {
  id: number;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
  color: CalendarEventColor;
  description: string;
};

export type CalendarData = {
  events: CalendarEvent[];
};
