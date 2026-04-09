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
import { useContext, useEffect, useState } from "react";
import { ActiveSubTabContext } from "../context/ActiveSubTabContext";
import { ControlsData } from "../types/ControlsData";
import { loadControlsData } from "../data/storage";
import Loading from "./Loading";

export default function Controls() {
  const activeSubTabContext = useContext(ActiveSubTabContext);
  const [controlsData, setControlsData] = useState<ControlsData | null>(null);

  useEffect(() => {
    loadControlsData().then((data) => setControlsData(data));
  }, []);

  if(controlsData === null) return <Loading />

  switch (activeSubTabContext?.value) {
    case "None":
      return <ControlsMainTab />;
    case "BlockSites":
      return <BlockSitesTab tabData={controlsData.blockSites} />;
    case "TabsCount":
      return <TabsCountTab tabData={controlsData.tabsCount} />;
    case "ScrollingLimit":
      return <ScrollingLimitTab tabData={controlsData.scrollingLimit} />;
    case "YouTube":
      return <YouTubeTab tabData={controlsData.youtube} />;
    case "Facebook":
      return <FacebookTab tabData={controlsData.facebook} />;
    case "Twitter":
      return <TwitterTab tabData={controlsData.twitter} />;
    case "TikTok":
      return <TikTokTab tabData={controlsData.tiktok} />;
    case "Instagram":
      return <InstagramTab tabData={controlsData.instagram} />;
    case "LinkedIn":
      return <LinkedInTab tabData={controlsData.linkedin} />;
    case "Pinterest":
      return <PinterestTab tabData={controlsData.pinterest} />;
    case "BlockByDomain":
      return <BlockByDomainTab tabData={controlsData.blockByDomain} />;
    case "ImportExportSettings":
      return <ImportExportSettingsTab />;
    case "ResetSettings":
      return <ResetSettingsTab />;
  }
}
