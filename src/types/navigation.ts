export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type MainTab =
  | "Home"
  | "Calendar"
  | "Tasks"
  | "Pomodoro"
  | "Controls"
  | "About";

export type ControlOptionTab =
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

export type SubTab = ControlOptionTab;

export type Tab = MainTab | SubTab;
