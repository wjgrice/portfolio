import ImageCard from "../components/ImageCard.jsx";
import content from "../data/content.json";

const ObjectiveSection = () => {
  const objectiveContent = content.sections.find(
    (section) => section.category === "objectives"
  );

  if (!objectiveContent) return null;

  return (
    <section className="w-full px-4">
      <ImageCard
        title=""
        image={objectiveContent.image}
        alt={objectiveContent.alt}
        paragraphs={objectiveContent.content}
      />
    </section>
  );
};

export default ObjectiveSection;