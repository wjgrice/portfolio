import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import Resume from "./routes/Resume";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      {/* Sets up a responsive base style for the entire app, including support for dark mode. */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
};

export default App;