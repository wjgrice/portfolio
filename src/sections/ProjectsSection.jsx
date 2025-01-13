import ProjectCard from "../components/ProjectCard";
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
            short_description={item.short_description} // Added short_description
            image={item.image}
            link={item.link}
            route={item.route}
            tagline={item.tagline}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
