import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ControlOption, StateSetter } from "../../types/navigation";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

type Props = {
  setActiveOption: StateSetter<ControlOption>;
};

const setMaxRecommendedVideos = function(event: React.ChangeEvent) {
  const value = (event.currentTarget as HTMLInputElement).value;
  console.log(value);
}

export default function YouTubeTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      <header className="font-bold text-[1.2rem] mb-[5px] flex items-center gap-[5px]">
        <button
          className="w-[30px] h-[30px] flex justify-center items-center rounded-[5px] transition-colors duration-300 cursor-pointer hover:bg-[#eee]"
          onClick={() => props.setActiveOption("None")}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <h3 className="font-bold">YouTube</h3>
      </header>

      <div>
        <div className="flex justify-between items-center">
          <span>Max recommended videos</span>
          <input
            className="w-[70px] border border-[#dadada] rounded-[5px] p-[5px_10px] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-0 focus:border-2 focus:border-primary"
            type="number"
            defaultValue={10}
            min={0}
            onChange={setMaxRecommendedVideos}
          />
        </div>
      </div>
    </main>
  );
}
