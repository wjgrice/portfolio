import ProjectCard from "../components/ProjectCard.jsx";
import content from "../data/content.json";

const ProjectsSection = () => {
  const projectsContent = content.sections.filter(
    (section) => section.category === "projects"
  );

  if (!projectsContent.length) return null;

  return (
    <section className="w-full px-4">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsContent.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
            link={item.link || "https://google.com"}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
