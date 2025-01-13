const ProjectPage = ({ project }) => {
  if (!project) {
    return <div className="p-6 text-center">Project not found.</div>;
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column: Image */}
        {project.image && (
          <div className="overflow-hidden rounded shadow-lg transition-transform transform hover:scale-[1.02]">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={`${project.title} snapshot`}
                  className="w-full h-auto"
                />
              </a>
            ) : (
              <img
                src={project.image}
                alt={`${project.title} snapshot`}
                className="w-full h-auto"
              />
            )}
          </div>
        )}

        {/* Right Column: Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

          {/* Render each paragraph in the description */}
          {project.description && (
            <div className="space-y-4">
              {project.description.map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* Repository Link */}
          {project.repo ? (
            <p className="text-lg mt-4">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Code Repository
              </a>
            </p>
          ) : (
            <p className="text-lg text-gray-500 mt-4">
              Repository link is currently private.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
