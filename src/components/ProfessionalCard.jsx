export default function ProfessionalCard({ profile, onClick }) {
    return (
    <div onClick={onClick} className="cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow p-4 hover:shadow-lg transition">
    <img src={profile.foto} alt={profile.nome} className="w-full h-40 object-cover rounded-xl" />
    <h2 className="mt-3 text-lg font-semibold">{profile.nome}</h2>
    <p className="text-sm text-gray-600 dark:text-gray-300">{profile.cargo}</p>
    <div className="flex flex-wrap gap-2 mt-3">
    {profile.habilidadesTecnicas.slice(0, 3).map((skill, i) => (
    <span key={i} className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 rounded-lg">{skill}</span>
    ))}
    </div>
    </div>
    );
    }