import clsx from "clsx";
import { useAppData } from "../../hooks/useAppData";
import { YoutubeSettings } from "../../types/ControlsData";

type Props = {
  appDatakey: keyof YoutubeSettings;
};

export default function ToggleButton(props: Props) {
  const appData = useAppData();
  const isActive = appData.value.controls.youtube.settings[props.appDatakey];



  const handleClick = function () {
    const newAppData = {
      ...appData.value,
      controls: {
        ...appData.value.controls,
        youtube: {
          ...appData.value.controls.youtube,
          settings: {
            ...appData.value.controls.youtube.settings,
            [props.appDatakey]: !isActive,
          },
        },
      },
    };

    appData.setValue(newAppData);
    chrome.storage.local.set({ ...newAppData });
  };

  return (
    <div
      className={clsx(
        "relative w-[40px] h-[20px] rounded-full before:w-[12px] before:h-[12px] before:rounded-full before:bg-white before:absolute before:top-[50%] before:transform-[translateY(-50%)] before:right-[3px] cursor-pointer before:transition-left before:duration-300 ",
        isActive
          ? "bg-primary before:left-[calc(100%-12px-3px)]"
          : "bg-[#bbb] before:left-[3px]",
      )}
      onClick={handleClick}
    ></div>
  );
}
