

export default function ProfessionalCard({ profile, onOpen }){
return (
<article className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={onOpen}>
<div className="flex items-center gap-4">
<img src={profile.foto} alt={profile.nome} className="w-16 h-16 rounded-full object-cover border" />
<div className="flex-1">
<h3 className="font-semibold">{profile.nome}</h3>
<p className="text-sm text-gray-500 dark:text-gray-400">{profile.cargo} • {profile.localizacao}</p>
<p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{profile.resumo}</p>
</div>
</div>


<div className="mt-3 flex flex-wrap gap-2">
{profile.habilidadesTecnicas.slice(0,5).map((s, i)=> (
<span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{s}</span>
))}
</div>
</article>
)
}