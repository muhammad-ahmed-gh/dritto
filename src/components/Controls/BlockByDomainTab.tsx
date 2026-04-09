import { BlockByDomainSettings, OptionData } from "../../types/ControlsData";

type Props = {
  tabData: OptionData<BlockByDomainSettings>;
}
export default function BlockByDomainTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      Block by domain
    </main>
  );
}
