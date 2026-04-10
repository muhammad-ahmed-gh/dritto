import { OptionData, TwitterSettings } from "../../types/ControlsData";

type Props = {
  tabData: OptionData<TwitterSettings>;
}

export default function TwitterTab(props: Props) {
  console.log(props);

  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Twitter
    </main>
  );
}
