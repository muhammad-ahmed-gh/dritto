import { OptionData, PinterestSettings } from "../../types/ControlsData";

type Props = {
  tabData: OptionData<PinterestSettings>;
};

export default function PinterestTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Pinterest
    </main>
  );
}
