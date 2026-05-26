import { ReactNode } from "react";

export type Children = ReactNode | ReactNode[];

export type StateSetter<T> = React.Dispatch<React.SetStateAction<T>>;
