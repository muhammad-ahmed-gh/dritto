import { ControlOptionTab, StateSetter } from "../../types/navigation";

type Props = {
  setActiveOption: StateSetter<ControlOptionTab>;
};

export default function LinkedInTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      LinkedIn
      <button onClick={() => props.setActiveOption("None")}>back</button>
    </main>
  );
}
