import { LinkedInSettings, OptionData } from "../../types/ControlsData";

type Props = {
  tabData: OptionData<LinkedInSettings>;
};

export default function LinkedInTab(props: Props) {
  return (
    <main className="p-[20px] h-tab-height text-text-muted overflow-y-auto">
      LinkedIn
    </main>
  );
}
