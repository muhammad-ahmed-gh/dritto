import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ControlsConfig from "../data/constrolsConfig";

type OptionProp = {
  label: string;
  icon: IconProp;
};

function Option(props: OptionProp) {
  return (
    <div className="option bg-white shadow-[0px_1px_2px_#77777761] flex justify-between items-center rounded-[5px] p-[10px_15px] select-none cursor-pointer hover:bg-[#fbfbfb] transition-[background-color] duration-[0.3s]">
      <span className="text-[0.95rem] flex items-center gap-[10px]">
        <FontAwesomeIcon className="text-[#666]" icon={props.icon} />
        {props.label}
      </span>
      <FontAwesomeIcon className="text-[#666]" icon={faAngleRight} />
    </div>
  );
}

export default function Controls() {
  return (
    <main className="p-[20px] h-[350px] text-[#555] overflow-y-scroll">
      <h3 className="font-bold text-[1.2rem] mb-[5px] capitalize">Controls</h3>
      <div className="categories flex flex-col gap-[20px]">
        {ControlsConfig.categories.map((category) => (
          <div key={category.title}>
            <span className="block font-bold text-[1.1rem] mb-[10px] capitalize">
              {category.title}
            </span>
            <div className="options flex flex-col gap-y-[10px] mt-[5px]">
              {category.options.map((option) => (
                <Option
                  key={option.label}
                  label={option.label}
                  icon={option.icon}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
