import { OptionData, TiktokSettings } from "../../types/ControlsData";

type Props = {
  tabData: OptionData<TiktokSettings>
}

export default function TikTokTab(props: Props) {
  console.log(props);

  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      TikTok
    </main>
  );
}
