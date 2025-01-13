import { useState, useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow p-4 mb-6 px-4">
      <ul className="flex items-center justify-between w-full relative">
        <li>
          <a href="/">
            <img
              src="/home-house.svg"
              alt="Home"
              className="h-8 w-8"
            />
          </a>
        </li>
        <li className="absolute left-1/2 transform -translate-x-1/2">
          <a
            href="/resume"
            className="flex items-center text-gray-800 dark:text-gray-100 font-semibold hover:scale-105 transition-transform"
          >
            <img
              src="/download-file-download.svg"
              alt="Download"
              className="h-5 w-5 mr-1"
            />
            Resume
          </a>
        </li>
        <li>
          <div className="relative inline-block text-left">
            <button
              className="flex items-center text-gray-800 dark:text-gray-100 font-semibold hover:scale-105 transition-transform"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              Mode
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded-md">
                <ul className="py-1">
                  <li
                    onClick={() => {
                      setTheme("light");
                      setMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Light
                  </li>
                  <li
                    onClick={() => {
                      setTheme("dark");
                      setMenuOpen(false);
                    }}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Dark
                  </li>
                </ul>
              </div>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;