import { useActiveSection } from "../hooks/useActiveSection";

export default function Footer() {
  const activeSection = useActiveSection();

  const goToAbout = () => {
    activeSection.setValue("About");
  };

  return (
    <footer
      className="
      bg-background p-main-padding
      flex justify-between items-center
      text-[15px] relative
      before:absolute before:top-0 before:left-1/2
      before:translate-x-[-50%] before:h-[1px]
      before:w-[calc(100%-40px)] before:bg-[#ddd]"
    >
      <span className="text-text-muted">dritto v1.0</span>
      <span
        onClick={goToAbout}
        className="text-text-dark cursor-pointer underline"
      >
        about
      </span>
    </footer>
  );
}
