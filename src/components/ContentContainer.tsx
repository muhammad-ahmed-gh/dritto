import { Children } from "../types/Children";

type Props = {
  children: Children;
};

export default function ContentContainer({ children }: Props) {
  return <main className="bg-background p-main-padding h-tab-height">{children}</main>;
}
