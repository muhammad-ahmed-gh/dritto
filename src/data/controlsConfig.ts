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
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ControlOption } from "../types/navigation";

type ControlsConfig = {
  categories: {
    title: string;
    options: {
      label: string;
      icon: IconProp;
      iconColor?: string;
      optionCode: ControlOption;
    }[];
  }[];
};

const controlsConfig: ControlsConfig = {
  categories: [
    {
      title: "focus",
      options: [
        {
          label: "Block sites",
          icon: faEarthAmericas,
          optionCode: "BlockSites",
        },
        {
          label: "Tabs count",
          icon: faTableCellsLarge,
          optionCode: "TabsCount",
        },
        {
          label: "Scrolling limit",
          icon: faMobileScreen,
          optionCode: "ScrollingLimit",
        },
      ],
    },
    {
      title: "social media",
      options: [
        {
          label: "YouTube",
          icon: faYoutube,
          iconColor: "#ff0033",
          optionCode: "YouTube",
        },
        {
          label: "Facebook",
          icon: faFacebook,
          iconColor: "#0866ff",
          optionCode: "Facebook",
        },
        {
          label: "Twitter",
          icon: faXTwitter,
          iconColor: "#0f1419",
          optionCode: "Twitter",
        },
        {
          label: "TikTok",
          icon: faTiktok,
          iconColor: "#000000",
          optionCode: "TikTok",
        },
        {
          label: "Instagram",
          icon: faInstagram,
          iconColor: "#d64437",
          optionCode: "Instagram",
        },
        {
          label: "LinkedIn",
          icon: faLinkedin,
          iconColor: "#0a66c2",
          optionCode: "LinkedIn",
        },
        {
          label: "Pinterest",
          icon: faPinterest,
          iconColor: "#e60023",
          optionCode: "Pinterest",
        },
      ],
    },
    {
      title: "advanced",
      options: [
        {
          label: "Block by domain",
          icon: faEarthAsia,
          optionCode: "BlockByDomain",
        },
        {
          label: "Import/export settings",
          icon: faArrowUpFromBracket,
          optionCode: "ImportExportSettings",
        },
        {
          label: "Reset settings",
          icon: faRotateLeft,
          optionCode: "ResetSettings",
        },
      ],
    },
  ],
};

export default controlsConfig;
