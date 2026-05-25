import Home from "./Home";
import { useActiveSection } from "../hooks/useActiveSection";
import About from "./About";

export function Content() {
  const activeSection = useActiveSection();

  switch (activeSection.value) {
    case "Home":
      return <Home />;
    case "BlockSites":
      return <></>;
    case "Scrolling":
      return <></>;
    case "Tabs":
      return <></>;
    case "SocialMedia":
      return <></>;
    case "About":
      return <About />;
  }
}
