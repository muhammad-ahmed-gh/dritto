import { faEarthAfrica, faMobileScreen, faTableCellsLarge, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Section } from "../types/general";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

type Category = {
  id: number;
  title: string;
  description: string;
  icon: IconDefinition;
  section: Section;
}

export const categories: Category[] = [
  {
    id: 1,
    title: "Block Sites",
    description:
      "Block certain sites or domains",
    icon: faEarthAfrica,
    section: "BlockSites",
  },
  {
    id: 2,
    title: "Scrolling",
    description:
      "Limit infinite scrolling with friction",
    icon: faMobileScreen,
    section: "Scrolling",
  },
  {
    id: 3,
    title: "Tabs",
    description:
      "Control the number of allowed open tabs",
    icon: faTableCellsLarge,
    section: "Tabs",
  },
  {
    id: 4,
    title: "Social Media",
    description:
      "Customize social media websites",
    icon: faPinterest,
    section: "SocialMedia",
  },
];
