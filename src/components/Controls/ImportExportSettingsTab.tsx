import { ControlOptionTab, StateSetter } from "../../types/navigation";

type Props = {
  setActiveOption: StateSetter<ControlOptionTab>;
};

export default function ImportExportSettingsTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Import/export settings
      <button onClick={() => props.setActiveOption("None")}>back</button>
    </main>
  );
}
