import { InstagramSettings, OptionData } from "../../types/ControlsData";

type Props = {
  tabData: OptionData<InstagramSettings>;
};

export default function InstagramTab(props: Props) {
  console.log(props);

  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Instagram
    </main>
  );
}
