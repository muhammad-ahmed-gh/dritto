import {
  faArrowUpFromBracket,
  faEarthAmericas,
  faEarthAsia,
  faMobileScreen,
  faRotateLeft,
  faWindowRestore,
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
import { ControlOptionTab } from "../types/tabs";

export type OptionConfig = {
  label: string;
  icon: IconProp;
  iconColor?: string;
  optionCode: ControlOptionTab;
  isTogglable: boolean;
};

type ControlsConfig = {
  categories: {
    title: string;
    options: OptionConfig[];
  }[];
};

const controlsConfig: ControlsConfig = {
  categories: [
    {
      title: "focus",
      options: [
        {
          optionCode: "BlockSites",
          label: "Block sites",
          icon: faEarthAmericas,
          isTogglable: true,
        },
        {
          optionCode: "TabsCount",
          label: "Tabs count",
          icon: faWindowRestore,
          isTogglable: true,
        },
        {
          optionCode: "ScrollingLimit",
          label: "Scrolling limit",
          icon: faMobileScreen,
          isTogglable: true,
        },
      ],
    },
    {
      title: "social media",
      options: [
        {
          optionCode: "YouTube",
          label: "YouTube",
          icon: faYoutube,
          iconColor: "#ff0033",
          isTogglable: true,
        },
        {
          optionCode: "Facebook",
          label: "Facebook",
          icon: faFacebook,
          iconColor: "#0866ff",
          isTogglable: true,
        },
        {
          optionCode: "Twitter",
          label: "Twitter",
          icon: faXTwitter,
          iconColor: "#0f1419",
          isTogglable: true,
        },
        {
          optionCode: "TikTok",
          label: "TikTok",
          icon: faTiktok,
          iconColor: "#000000",
          isTogglable: true,
        },
        {
          optionCode: "Instagram",
          label: "Instagram",
          icon: faInstagram,
          iconColor: "#d64437",
          isTogglable: true,
        },
        {
          optionCode: "LinkedIn",
          label: "LinkedIn",
          icon: faLinkedin,
          iconColor: "#0a66c2",
          isTogglable: true,
        },
        {
          optionCode: "Pinterest",
          label: "Pinterest",
          icon: faPinterest,
          iconColor: "#e60023",
          isTogglable: true,
        },
      ],
    },
    {
      title: "advanced",
      options: [
        {
          optionCode: "BlockByDomain",
          label: "Block by domain",
          icon: faEarthAsia,
          isTogglable: true,
        },
        {
          optionCode: "ImportExportSettings",
          label: "Import/export settings",
          icon: faArrowUpFromBracket,
          isTogglable: false,
        },
        {
          optionCode: "ResetSettings",
          label: "Reset settings",
          icon: faRotateLeft,
          isTogglable: false,
        },
      ],
    },
  ],
};

export default controlsConfig;
