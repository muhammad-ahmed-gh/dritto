import { YoutubeSettings } from "../../types/ControlsData";
import ToggleButton from "./ToggleButton";

type Props = {
  label: string;
  appDataKey: keyof YoutubeSettings;
};

export default function ToggleInputField(props: Props) {

  return (
    <div className="flex justify-between items-center">
      <span>{props.label}</span>
      <ToggleButton appDatakey={props.appDataKey} />
    </div>
  );
}
