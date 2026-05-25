import { AppearanceData } from "./AppearanceData";
import { UserSettings } from "./UserSettings";

export type AppData = {
  appearance: AppearanceData;
  lang: "AR" | "EN";
  settings: UserSettings;
};
