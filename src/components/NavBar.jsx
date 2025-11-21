export default function Navbar({ isDark, setIsDark }) {
    return (
      <nav className="w-full py-4 px-6 bg-gray-100 dark:bg-gray-800 shadow">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
  
          <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100">SocialJobs</h1>
  
          <div className="flex items-center gap-6">
            <a className="text-gray-800 dark:text-gray-200">Home</a>
            <a className="text-gray-800 dark:text-gray-200">Perfil</a>
            <a className="text-gray-800 dark:text-gray-200">Vagas</a>
  
            {/* TOGGLE */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="px-3 py-1 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </div>
        </div>
      </nav>
    );
  }
  