import { useAppData } from "../../hooks/useAppData";
import { YoutubeSettings } from "../../types/ControlsData";

type Props = {
  label: string;
  togglable: boolean;
  appDataKey: keyof YoutubeSettings;
  minValue?: number;
  maxValue?: number;
};

export default function NumericInputField(props: Props) {
  const appData = useAppData();
  const value = Number(
    appData.value.controls.youtube.settings[props.appDataKey],
  );

  const handleChange = function (e: React.ChangeEvent<HTMLInputElement>) {
    appData.setValue({
      ...appData.value,
      controls: {
        ...appData.value.controls,
        youtube: {
          ...appData.value.controls.youtube,
          settings: {
            ...appData.value.controls.youtube.settings,
            [props.appDataKey]: Number(e.currentTarget.value),
          },
        },
      },
    });
  };

  const handleBlur = function () {
    chrome.storage.local.set({
      ...appData.value,
    });
  };

  return (
    <div className="flex justify-between items-center">
      <span>{props.label}</span>
      <input
        className="w-[70px] border border-[#dadada] rounded-[5px] p-[5px_10px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none transition-shadow duration-100 focus:outline-0 focus:ring-2 focus:ring-primary"
        type="number"
        min={props.minValue}
        max={props.maxValue}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </div>
  );
}
