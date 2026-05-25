import { Children } from "../types/general";

type Props = {
  children: Children;
};

export default function ContentContainer({ children }: Props) {
  return (
    <main className="
      bg-background p-main-padding
      h-tab-height overflow-y-scroll
      [&::-webkit-scrollbar]:w-[10px]
      [&::-webkit-scrollbar-thumb]:bg-gray-300
      [&::-webkit-scrollbar-thumb]:rounded-full
      ">
      {children}
    </main>
  );
}
