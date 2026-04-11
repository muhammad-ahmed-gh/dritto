import clsx from "clsx";
import { youtubeConfig } from "../../data/controlsTabsConfig/youtubeConfig";
import { useAppData } from "../../hooks/useAppData";
import NumericInputField from "../UI/NumericInputField";
import TextInputField from "../UI/TextInputField";
import ToggleInputField from "../UI/ToggleInputField";

const config = youtubeConfig;

export default function YouTubeTab() {
  const appData = useAppData();
  const tabData = appData.value.controls.youtube;

  return (
    <main
      className={clsx(
        "p-[20px] h-tab-height flex flex-col gap-[20px] text-text-muted overflow-y-auto",
        !tabData.enabled && "opacity-50 pointer-events-none",
      )}
    >
      {config.map((entry) => {
        switch (entry.type) {
          case "textInputField":
            return (
              <TextInputField
                key={entry.id}
                label={entry.label}
                appDataKey={entry.appDataKey}
                togglable={entry.togglable}
              />
            );
          case "numericInputField":
            return (
              <NumericInputField
                key={entry.id}
                label={entry.label}
                appDataKey={entry.appDataMap}
                togglable={entry.togglable}
                minValue={entry.minValue}
                maxValue={entry.maxValue}
              />
            );
          case "toggle":
            return (
              <ToggleInputField
                key={entry.id}
                label={entry.label}
                appDataKey={entry.appDataMap}
              />
            );
        }
      })}
    </main>
  );
}
