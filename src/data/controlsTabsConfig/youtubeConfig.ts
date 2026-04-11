import { YoutubeSettings } from "../../types/ControlsData";

type NumberInputFieldConfig = {
  id: number;
  type: "numericInputField";
  label: string;
  togglable: boolean;
  minValue?: number;
  maxValue?: number;
  appDataMap: keyof YoutubeSettings;
};

type TextInputFieldConfig = {
  id: number;
  type: "textInputField";
  togglable: boolean;
  label: string;
  appDataKey: keyof YoutubeSettings;
};

type ToggleInputFieldConfig = {
  id: number;
  type: "toggle";
  label: "Hide description";
  appDataMap: keyof YoutubeSettings;
};

type YouTubeConfig = (
  | NumberInputFieldConfig
  | TextInputFieldConfig
  | ToggleInputFieldConfig
)[];

export const youtubeConfig: YouTubeConfig = [
  {
    id: 1,
    type: "numericInputField",
    togglable: true,
    label: "Max homepage videos",
    minValue: 0,
    appDataMap: "maxHomePageVideos",
  },
  {
    id: 2,
    type: "numericInputField",
    togglable: true,
    label: "Max suggested videos",
    minValue: 0,
    appDataMap: "maxSuggestedVideos",
  },
  {
    id: 3,
    type: "numericInputField",
    togglable: true,
    label: "Max shorts",
    minValue: 0,
    appDataMap: "maxShorts",
  },
  {
    id: 4,
    type: "numericInputField",
    togglable: true,
    label: "Max comments",
    minValue: 0,
    appDataMap: "maxComments",
  },
  {
    id: 5,
    type: "toggle",
    label: "Hide description",
    appDataMap: "hideDescription",
  },
];
