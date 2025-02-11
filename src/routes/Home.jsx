import ObjectiveSection from "../sections/ObjectiveSection";
import DetailsSection from "../sections/DetailsSection";
import ProjectsSection from "../sections/ProjectsSection";
import ChatbotSection from "../sections/ChatbotSection.jsx";

const Home = () => {
  return (
    <div className="space-y-12">
      {/* Two-column layout on medium screens and up, single column on small screens */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <ObjectiveSection />
        </div>
        <div>
          <ChatbotSection />
        </div>
      </div>
      <DetailsSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
