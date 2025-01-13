import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Resume from "./routes/Resume";
import ProjectPage from "./routes/ProjectPage";
import content from "./data/content.json";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        {content.sections
          .filter((section) => section.category === "projects")
          .map((project, index) => (
            <Route
              key={index}
              path={project.route}
              element={<ProjectPage project={project} />}
            />
          ))}
      </Routes>
    </div>
  );
};

export default App;
