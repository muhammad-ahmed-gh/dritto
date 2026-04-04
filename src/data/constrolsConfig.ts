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

const ControlsConfig = {
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
          optionCode: "YouTube",
        },
        {
          label: "Facebook",
          icon: faFacebook,
          optionCode: "Facebook",
        },
        {
          label: "Twitter",
          icon: faXTwitter,
          optionCode: "Twitter",
        },
        {
          label: "TikTok",
          icon: faTiktok,
          optionCode: "TikTok",
        },
        {
          label: "Instagram",
          icon: faInstagram,
          optionCode: "Instagram",
        },
        {
          label: "LinkedIn",
          icon: faLinkedin,
          optionCode: "LinkedIn",
        },
        {
          label: "Pinterest",
          icon: faPinterest,
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

export default ControlsConfig;
