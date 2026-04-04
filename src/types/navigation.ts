export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type Tab =
  | "Home"
  | "Calendar"
  | "Tasks"
  | "Pomodoro"
  | "Controls"
  | "About";

export type ControlOption =
  | "None"
  | "BlockSites"
  | "TabsCount"
  | "ScrollingLimit"
  | "YouTube"
  | "Facebook"
  | "Twitter"
  | "TikTok"
  | "Instagram"
  | "LinkedIn"
  | "Pinterest"
  | "BlockByDomain"
  | "ImportExportSettings"
  | "ResetSettings";
