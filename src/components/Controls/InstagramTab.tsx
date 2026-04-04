import { ControlOption, StateSetter } from "../../types/navigation";

type Props = {
  setActiveOption: StateSetter<ControlOption>;
}

export default function InstagramTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Instagram
      <button onClick={() => props.setActiveOption("None")}>back</button>
    </main>
  );
}