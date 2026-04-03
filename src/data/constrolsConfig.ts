import {
  faArrowUpFromBracket,
  faEarthAmericas,
  faEarthAsia,
  faMobileScreen,
  faRotateLeft,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faFacebook,
  faInstagram,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ControlsConfig = {
  categories: [
    {
      title: "focus",
      options: [
        { label: "Block sites", icon: faEarthAmericas },
        { label: "Tabs count", icon: faTableCellsLarge },
        { label: "Scrolling limit", icon: faMobileScreen },
      ],
    },
    {
      title: "social media",
      options: [
        { label: "YouTube", icon: faYoutube },
        { label: "Facebook", icon: faFacebook },
        { label: "Twitter", icon: faXTwitter },
        { label: "Tiktok", icon: faTiktok },
        { label: "Instagram", icon: faInstagram },
      ],
    },
    {
      title: "advanced",
      options: [
        { label: "Block by domain", icon: faEarthAsia },
        { label: "Import/export settings", icon: faArrowUpFromBracket },
        { label: "Reset settings", icon: faRotateLeft },
      ],
    },
  ],
};

export default ControlsConfig;
