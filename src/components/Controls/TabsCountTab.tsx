import { OptionData, TabsCountSettings } from "../../types/ControlsData";

type Props = {
  tabData: OptionData<TabsCountSettings>;
}

export default function TabsCountTab(props: Props) {
  console.log(props);

  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Tabs count
    </main>
  );
}
