
import ObjectiveSection from "../sections/ObjectiveSection";
import DetailsSection from "../sections/DetailsSection";
import ProjectsSection from "../sections/ProjectsSection";

const Home = () => {
  return (
    <div className="space-y-12">
      <ObjectiveSection />
      <DetailsSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
