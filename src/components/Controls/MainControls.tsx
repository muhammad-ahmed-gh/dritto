import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ControlsConfig from "../../data/constrolsConfig";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ControlOption, StateSetter } from "../../types/navigation";

type OptionProp = {
  label: string;
  icon: IconProp;
  handleClick: () => void;
};

function Option(props: OptionProp) {
  return (
    <div className="option bg-surface shadow-[0px_1px_2px_#77777761] flex justify-between items-center rounded-[5px] py-[10px] px-[15px] select-none cursor-pointer hover:bg-surface-lighter transition-colors duration-300" onClick={props.handleClick}>
      <span className="text-[0.95rem] flex items-center gap-[10px]">
        <FontAwesomeIcon className="text-text-dark" icon={props.icon} />
        {props.label}
      </span>
      <FontAwesomeIcon className="text-text-dark" icon={faAngleRight} />
    </div>
  );
}

type Props = {
  setActiveOption: StateSetter<ControlOption>;
}

export default function MainControls(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-scroll">
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
                  handleClick={() => props.setActiveOption(option.optionCode as ControlOption)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};