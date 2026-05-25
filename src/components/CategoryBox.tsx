import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Section } from "../types/general";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useActiveSection } from "../hooks/useActiveSection";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

type Props = {
  title: string;
  description: string;
  icon: IconDefinition;
  section: Section;
};

export default function CategoryBox(props: Props) {
  const activeSection = useActiveSection();
  const handleClick = () => activeSection.setValue(props.section);

  return (
    <div
      onClick={handleClick}
      className="
        bg-white rounded-[10px]
        p-[15px] flex justify-between
        items-center gap-[30px]
        not-[:last-child]:mb-[15px]
        cursor-pointer shadow-md
        transition-shadow duration-300
        select-none
        hover:shadow-lg"
    >
      <div className="flex gap-[15px]">
        <div className="bg-[#d8eef2] text-text-dark text-[20px] w-[50px] rounded-[10px] flex justify-center items-center shrink-0">
          <FontAwesomeIcon icon={props.icon} />
        </div>
        <div>
          <h3 className="font-bold text-[17px] mb-[5px]">{props.title}</h3>
          <p className="line-clamp-2 text-text-muted text-[14px]">{props.description}</p>
        </div>
      </div>
      <span className="text-text-dark">
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </div>
  );
}
