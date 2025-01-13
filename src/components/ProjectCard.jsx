const ProjectCard = ({ title, description, image, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-cover bg-center bg-no-repeat p-4 shadow rounded transition-transform transform hover:scale-105 hover:shadow-xl"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-4 rounded">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;