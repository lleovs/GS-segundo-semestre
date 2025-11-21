export default function Navbar({ isDark, setIsDark }) {
    return (
      <nav className="w-full bg-white dark:bg-gray-800 px-6 py-4 shadow flex justify-between items-center transition-colors">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          SocialJobs
        </h1>
  
        {/* Links */}
        <ul className="flex gap-6 text-gray-700 dark:text-gray-200 font-medium">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">Perfil</li>
          <li className="cursor-pointer hover:underline">Vagas</li>
        </ul>
  
        {/* Botão de tema */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700
                     text-gray-900 dark:text-gray-100 transition"
        >
          {isDark ? "☀️ Modo Claro" : "🌙 Modo Escuro"}
        </button>
      </nav>
    );
  }