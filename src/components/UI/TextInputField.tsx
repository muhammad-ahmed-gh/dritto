import { YoutubeSettings } from "../../types/ControlsData";

type Props = {
  label: string;
  togglable: boolean;
  appDataKey: keyof YoutubeSettings;
};

const handleChange = function () {
  
};

export default function TextInputField(props: Props) {
  return (
    <div className="flex justify-between items-center">
      <span>{props.label}</span>
      <input
        className="w-[70px] border border-[#dadada] rounded-[5px] p-[5px_10px] transition-shadow duration-100 focus:outline-0 focus:ring-2 focus:ring-primary"
        type="text"
        onChange={handleChange}
      />
    </div>
  );
}
