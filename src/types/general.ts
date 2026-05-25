import { ReactNode } from "react";

export type Children = ReactNode | ReactNode[];

export type Section = "Home" | "BlockSites" | "Scrolling" | "Tabs" | "SocialMedia" | "About";

export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
