import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, IconName } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import Tab from "../types/navigation";

type ButtonProps = {
  isActive: boolean;
  icon: string;
  label: string;
  handleClick: () => void;
};

function Button(props: ButtonProps) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-[5px]">
      <button
        className={`flex justify-center items-center w-[50px] h-[50px] rounded-full cursor-pointer transition-[background-color] duration-[0.3s] ${props.isActive ? "text-white bg-[#32f461] hover:bg-[#2cdd58]" : "text-[#555] hover:bg-[#f1f1f1]"}`}
        onClick={props.handleClick}
      >
        <FontAwesomeIcon icon={["fas", props.icon as IconName]} />
      </button>

      <span className="text-[13px] capitalize text-[#555]">{props.label}</span>
    </div>
  );
}

type FooterProps = {
  setActiveTab: React.Dispatch<React.SetStateAction<Tab>>;
};

export default function Footer(props: FooterProps) {
  return (
    <footer className="bg-white py-[10px] px-[20px] flex justify-evenly items-center">
      <Button
        handleClick={() => props.setActiveTab("Calendar")}
        isActive={false}
        icon="calendar"
        label="calendar"
      />
      <Button
        handleClick={() => props.setActiveTab("Tasks")}
        isActive={false}
        icon="check"
        label="tasks"
      />
      <Button
        handleClick={() => props.setActiveTab("Home")}
        isActive={true}
        icon="house"
        label="Home"
      />
      <Button
        handleClick={() => props.setActiveTab("Pomodoro")}
        isActive={false}
        icon="clock"
        label="sessions"
      />
      <Button
        handleClick={() => props.setActiveTab("Options")}
        isActive={false}
        icon="gear"
        label="options"
      />
    </footer>
  );
}
