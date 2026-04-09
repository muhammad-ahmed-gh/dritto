import { OptionData, ScrollingLimitSettings } from "../../types/ControlsData";

type Props = {
  tabData: OptionData<ScrollingLimitSettings>;
};

export default function ScrollingLimitTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Scrolling limit
    </main>
  );
}
