import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import controlsConfig from "../../data/controlsConfig";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useContext } from "react";
import { ActiveSubTabContext } from "../../context/ActiveSubTabContext";

type OptionProp = {
  label: string;
  icon: IconProp;
  iconColor?: string;
  handleClick: () => void;
};

function Option(props: OptionProp) {
  return (
    <div
      className="bg-surface shadow-[0px_1px_2px_#77777761] flex justify-between items-center rounded-[5px] py-[10px] px-[15px] select-none cursor-pointer hover:bg-surface-lighter transition-colors duration-300"
      onClick={props.handleClick}
    >
      <span className="text-[0.95rem] flex items-center gap-[10px]">
        <FontAwesomeIcon
          className="text-text-muted"
          style={{ color: `${props.iconColor || undefined}` }}
          icon={props.icon}
        />
        {props.label}
      </span>
      <FontAwesomeIcon className="text-text-muted" icon={faAngleRight} />
    </div>
  );
}

export default function ControlsMainTab() {
  const activeSubTabContext = useContext(ActiveSubTabContext);

  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      <h3 className="font-bold text-[1.2rem] mb-[5px] capitalize">Controls</h3>
      <div className="flex flex-col gap-[20px]">
        {controlsConfig.categories.map((category) => (
          <div key={category.title}>
            <span className="block font-bold text-[1.1rem] mb-[10px] capitalize">
              {category.title}
            </span>
            <div className="flex flex-col gap-y-[10px] mt-[5px]">
              {category.options.map((option) => (
                <Option
                  key={option.label}
                  label={option.label}
                  icon={option.icon}
                  iconColor={option.iconColor}
                  handleClick={() =>
                    activeSubTabContext?.setValue(option.optionCode)
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
