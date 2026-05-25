import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ContentContainer from "./ContentContainer";

export default function Home() {
  return (
    <ContentContainer>
      <p className="text-[15px] text-text-muted text-center w-[180px] mt-[20px] mx-auto">
        Come in and control your
        bad habits
      </p>

      <button
        type="button"
        className="flex justify-center items-center mx-auto mt-[30px] text-primary text-[14px] w-[30px] h-[30px] rounded-full bg-white hover:bg-[#fafafa] transition-colors duration-300 animate-bounce cursor-pointer border-[#e5e5e5] border [animation-duration:1.5s] "
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </ContentContainer>
  );
}
