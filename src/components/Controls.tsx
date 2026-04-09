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
// import { ControlsData } from "../types/ControlsData";
import { useContext, /*useEffect, useState*/ } from "react";
import { ActiveSubTabContext } from "../context/ActiveSubTabContext";

export default function Controls() {
  const activeSubTabContext = useContext(ActiveSubTabContext);
  // const [controlsData, setControlsData] = useState<ControlsData | null>(null);

  // useEffect(() => {
  //   chrome.storage.local.get(["controls"])
  //   .then(res => setControlsData(res.controls as ControlsData));
  // }, []);

  switch(activeSubTabContext?.value) {
    case "None":
      return <ControlsMainTab />
    case "BlockSites":
      return <BlockSitesTab />;
    case "TabsCount":
      return <TabsCountTab />;
    case "ScrollingLimit":
      return <ScrollingLimitTab />;
    case "YouTube":
      return <YouTubeTab />;
    case "Facebook":
      return <FacebookTab />;
    case "Twitter":
      return <TwitterTab />;
    case "TikTok":
      return <TikTokTab />;
    case "Instagram":
      return <InstagramTab />;
    case "LinkedIn":
      return <LinkedInTab />;
    case "Pinterest":
      return <PinterestTab />;
    case "BlockByDomain":
      return <BlockByDomainTab />;
    case "ImportExportSettings":
      return <ImportExportSettingsTab />;
    case "ResetSettings":
      return <ResetSettingsTab />;
  }
}
