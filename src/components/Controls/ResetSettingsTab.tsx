import { ControlOption, StateSetter } from "../../types/navigation";

type Props = {
  setActiveOption: StateSetter<ControlOption>;
}

export default function ResetSettingsTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Reset settings
      <button onClick={() => props.setActiveOption("None")}>back</button>
    </main>
  );
}