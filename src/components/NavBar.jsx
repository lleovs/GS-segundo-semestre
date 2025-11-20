export default function Navbar() {
    return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-md">
    <div className="text-xl font-bold text-gray-800 dark:text-white">JobConnect</div>
    <ul className="flex items-center gap-6 text-gray-700 dark:text-gray-300">
    <li className="cursor-pointer hover:text-blue-500">Home</li>
    <li className="cursor-pointer hover:text-blue-500">Perfil</li>
    <li className="cursor-pointer hover:text-blue-500">Vagas</li>
    </ul>
    <button onClick={() => document.documentElement.classList.toggle('dark')} className="px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:opacity-80 transition">
    Alternar Tema
    </button>
    </nav>
    );
    }