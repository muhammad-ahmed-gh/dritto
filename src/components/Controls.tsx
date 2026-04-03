import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

type OptionProp = {
  label: string;
  icon: IconProp;
};

function Option(props: OptionProp) {
  return (
    <div className="option bg-white shadow-[0px_1px_2px_#77777761] flex justify-between items-center rounded-[5px] p-[10px_15px] select-none cursor-pointer hover:bg-[#fbfbfb] transition-[background-color] duration-[0.3s]">
      <span className="text-[0.95rem] flex items-center gap-[10px]">
        <FontAwesomeIcon className="text-[#666]" icon={props.icon}></FontAwesomeIcon>
        {props.label}
      </span>
      <FontAwesomeIcon className="text-[#666]" icon={['fas', 'angle-right']}></FontAwesomeIcon>
    </div>
  );
}

export default function Controls() {
  return (
      <main className="p-[20px] h-[350px] text-[#555] overflow-y-scroll">
        <h3 className="font-bold text-[1.2rem] mb-[5px]">Controls</h3>
        <div className="categories flex flex-col gap-[20px]">
          <div className="category">
            <span className="block font-bold text-[1.1rem] mb-[10px]">Focus</span>
            <div className="options flex flex-col gap-y-[10px] mt-[5px]">
              <Option label="Block sites" icon={["fas", "earth-americas"]} />
              <Option label="Tabs count" icon={["fas", "table-cells-large"]} />
              <Option label="Scrolling limit" icon={["fas", "mobile-screen"]} />
            </div>
          </div>
          <div className="category">
            <span className="block font-bold text-[1.1rem] mb-[10px]">Social Media</span>
            <div className="options flex flex-col gap-y-[10px] mt-[5px]">
              <Option label="YouTube" icon={["fab", "youtube"]} />
              <Option label="Facebook" icon={["fab", "facebook"]} />
              <Option label="Twitter" icon={["fab", "x-twitter"]} />
              <Option label="TikTok" icon={["fab", "tiktok"]} />
              <Option label="Instagram" icon={["fab", "instagram"]} />
            </div>
          </div>
          <div className="category">
            <span className="block font-bold text-[1.1rem] mb-[10px]">Advanced</span>
            <div className="options flex flex-col gap-y-[10px] mt-[5px]">
              <Option label="Block by domain" icon="earth-asia" />
              <Option label="Import/export settings" icon={["fas", "arrow-up-from-bracket"]} />
              <Option label="Reset settings" icon={["fas", "rotate-left"]} />
            </div>
          </div>
        </div>
      </main>
  );
}