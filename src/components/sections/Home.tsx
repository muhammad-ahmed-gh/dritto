import ContentContainer from "../ui/ContentContainer";
import { categories } from "../../data/categories";
import CategoryBox from "../ui/CategoryBox";

export default function Home() {
  return (
    <ContentContainer>
      <p className="text-[15px] text-text-muted text-center w-[180px] mx-auto">
        Come in and control your bad habits
      </p>

      <div className="my-[20px]">
        {categories.map((category) => (
          <CategoryBox
            key={category.id}
            title={category.title}
            description={category.description}
            icon={category.icon}
            section={category.section}
          />
        ))}
      </div>
    </ContentContainer>
  );
}
