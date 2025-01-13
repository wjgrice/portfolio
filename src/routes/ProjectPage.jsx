const ProjectPage = ({ project }) => {
  if (!project) {
    return <div className="p-6 text-center">Project not found.</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={`${project.title} snapshot`}
        className="rounded shadow mb-6"
      />
      <p className="text-lg mb-4">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Live Project
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 text-blue-500 hover:underline"
        >
          View Code Repository
        </a>
      )}
    </div>
  );
};

export default ProjectPage;
