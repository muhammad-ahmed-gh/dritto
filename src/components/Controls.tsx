import { ControlOptionTab, StateSetter } from "../types/navigation";
import ControlsMainTab from "./Controls/ControlsMainTab";
import BlockSitesTab from "./Controls/BlockSitesTab";
import TabsCountTab from "./Controls/TabsCountTab";
import ScrollingLimitTab from "./Controls/ScrollingLimitTab";
import YouTubeTab from "./Controls/YouTubeTab";
import FacebookTab from "./Controls/FaceBookTab";
import TwitterTab from "./Controls/TwitterTab";
import TikTokTab from "./Controls/TikTokTab";
import InstagramTab from "./Controls/InstagramTab";
import LinkedInTab from "./Controls/LinkedInTab";
import PinterestTab from "./Controls/PinterestTab";
import BlockByDomainTab from "./Controls/BlockByDomainTab";
import ImportExportSettingsTab from "./Controls/ImportExportSettingsTab";
import ResetSettingsTab from "./Controls/ResetSettingsTab";

type Props = {
  activeSubTab: ControlOptionTab;
  setActiveSubTab: StateSetter<ControlOptionTab>;
};

export default function Controls(props: Props) {
  const optionComponents = {
    None: ControlsMainTab,
    BlockSites: BlockSitesTab,
    TabsCount: TabsCountTab,
    ScrollingLimit: ScrollingLimitTab,
    YouTube: YouTubeTab,
    Facebook: FacebookTab,
    Twitter: TwitterTab,
    TikTok: TikTokTab,
    Instagram: InstagramTab,
    LinkedIn: LinkedInTab,
    Pinterest: PinterestTab,
    BlockByDomain: BlockByDomainTab,
    ImportExportSettings: ImportExportSettingsTab,
    ResetSettings: ResetSettingsTab,
  };

  const CurrentOptionTab = optionComponents[props.activeSubTab];
  return <CurrentOptionTab setActiveOption={props.setActiveSubTab} />;
}
