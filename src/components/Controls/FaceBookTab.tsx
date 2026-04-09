import { FacebookSettings, OptionData } from "../../types/ControlsData";

type Props = {
  tabData: OptionData<FacebookSettings>;
};

export default function FacebookTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Facebook
    </main>
  );
}
