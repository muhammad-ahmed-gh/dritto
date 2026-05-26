import clsx from "clsx";

type Props = {
  on: boolean;
  handleClick: () => void;
};

export default function ToggleButton(props: Props) {
  return (
    <div
      className={clsx(
        "h-[20px] w-[50px] rounded-full cursor-pointer relative ",
        props.on ? "bg-text-dark" : "bg-gray-300",
      )}
      onClick={props.handleClick}
    >
      <div
        className={clsx(
          "h-[20px] w-[20px] scale-130 rounded-full bg-white absolute top-0 transition-[left] duration-300 ",
          props.on ? "left-[calc(100%-20px)]" : "left-0",
        )}
      ></div>
    </div>
  );
}
