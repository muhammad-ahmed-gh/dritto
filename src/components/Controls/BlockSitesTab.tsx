import { BlockSitesSettings, OptionData } from "../../types/ControlsData";

type Props = {
  tabData: OptionData<BlockSitesSettings>
}

export default function BlockSitesTab(props: Props) {
  console.log(props);

  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Block sites
    </main>
  );
}
