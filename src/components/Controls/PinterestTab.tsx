import { ControlOptionTab, StateSetter } from "../../types/navigation";

type Props = {
  setActiveOption: StateSetter<ControlOptionTab>;
};

export default function PinterestTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Pinterest
      <button onClick={() => props.setActiveOption("None")}>back</button>
    </main>
  );
}
