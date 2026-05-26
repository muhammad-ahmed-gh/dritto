import Home from "./sections/Home";
import { useActiveSection } from "../hooks/useActiveSection";
import About from "./sections/About";
import Error from "./Error";
import BlockSitesSection from "./sections/BlockSitesSection";
import ScrollingSection from "./sections/ScrollingSection";
import TabsSection from "./sections/TabsSection";
import SocialMediaSection from "./sections/SocialMediaSection";

export function Content() {
  const activeSection = useActiveSection();

  switch (activeSection.value) {
    case "Home":
      return <Home />;
    case "About":
      return <About />;
    case "BlockSites":
      return <BlockSitesSection />;
    case "Scrolling":
      return <ScrollingSection />;
    case "Tabs":
      return <TabsSection />;
    case "SocialMedia":
      return <SocialMediaSection />;
    default:
      return <Error message="ERROR: Trying to render an invalid section!" />;
  }
}
