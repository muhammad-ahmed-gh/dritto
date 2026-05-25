export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;

export type Section =
  | "Home"
  | "BlockSites"
  | "Scrolling"
  | "Tabs"
  | "SocialMedia"
  | "About";
