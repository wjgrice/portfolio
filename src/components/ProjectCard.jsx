import { Link } from "react-router-dom";

const ProjectCard = ({ tagline, short_description, image, link, route }) => {
  const destination = route || link;

  return (
    <Link
      to={destination}
      target={route ? "_self" : "_blank"}
      rel={route ? undefined : "noopener noreferrer"}
      className="block relative shadow rounded overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
      style={{
        minHeight: "300px", // Minimum height to ensure consistent size
      }}
    >
      {/* Image */}
      <div className="w-full h-full">
        <img
          src={image}
          alt={tagline || "Project image"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
        <div className="text-center text-white p-4">
          {/* Display tagline if present */}
          {tagline && <h4 className="text-lg font-semibold mb-2">{tagline}</h4>}
          {/* Display the short description if available */}
          {short_description && <p className="text-sm">{short_description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
