
export default function ProfessionalCard({ profile, onOpen }) {
  return (
    <div
      className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 cursor-pointer hover:shadow-xl transition-shadow flex flex-col"
      onClick={() => onOpen(profile)}
      role="button"
      tabIndex={0}
    >
      <div className="flex items-center gap-4">
        <img
          src={profile.foto}
          alt={profile.nome}
          className="w-16 h-16 rounded-full object-cover border"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{profile.nome}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">{profile.cargo}</p>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {profile.resumo}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {profile.habilidadesTecnicas.slice(0,4).map((t,i) => (
            <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
