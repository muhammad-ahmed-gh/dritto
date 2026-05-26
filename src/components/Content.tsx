import Home from "./Home";
import { useActiveSection } from "../hooks/useActiveSection";
import About from "./About";
import Error from "./Error";
import BlockSitesSection from "./BlockSitesSection";
import ScrollingSection from "./ScrollingSection";
import TabsSection from "./TabsSection";
import SocialMediaSection from "./SocialMediaSection";

export function Content() {
  const activeSection = useActiveSection();

  switch (activeSection.value) {
    case "Home":
      return <Home />;
    case "About":
      return <About />;
    case "BlockSites":
      return <BlockSitesSection />
    case "Scrolling":
      return <ScrollingSection />
    case "Tabs":
      return <TabsSection />
    case "SocialMedia":
      return <SocialMediaSection />
    default:
      return <Error message="ERROR: Trying to render an invalid section!" />;
  }
}
