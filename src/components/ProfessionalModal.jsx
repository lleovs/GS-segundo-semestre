

export default function ProfessionalModal({ profile, onClose, onRecommend, onMessage }){
return (
<div className="fixed inset-0 z-50 flex items-center justify-center p-4">
<div className="absolute inset-0 bg-black/40" onClick={onClose} />


<div className="relative bg-white dark:bg-gray-800 w-full max-w-3xl rounded-2xl shadow-xl p-6 z-10 overflow-auto max-h-[90vh]">
<button className="absolute top-4 right-4 text-gray-600 dark:text-gray-300" onClick={onClose}>✕</button>


<header className="flex items-center gap-4">
<img src={profile.foto} alt={profile.nome} className="w-20 h-20 rounded-full object-cover border" />
<div>
<h2 className="text-xl font-bold">{profile.nome}</h2>
<p className="text-sm text-gray-500 dark:text-gray-400">{profile.cargo} • {profile.localizacao}</p>
<p className="mt-2 text-sm">{profile.resumo}</p>
</div>
</header><div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
<section>
<h3 className="font-semibold">Formação</h3>
<ul className="mt-2 text-sm space-y-2">
{profile.formacao.map((f,i)=>(
<li key={i}><strong>{f.curso}</strong> — {f.instituicao} ({f.ano})</li>
))}
</ul>


<h3 className="mt-4 font-semibold">Idiomas</h3>
<ul className="mt-2 text-sm">
{profile.idiomas.map((l,i)=>(<li key={i}>{l.idioma} — {l.nivel}</li>))}
</ul>


<h3 className="mt-4 font-semibold">Certificações</h3>
<div className="mt-2 flex flex-wrap gap-2">
{profile.certificacoes.map((c,i)=>(<span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{c}</span>))}
</div>
</section>


<section>
<h3 className="font-semibold">Experiências</h3>
<ul className="mt-2 text-sm space-y-2">
{profile.experiencias.map((e,i)=>(
<li key={i}>
<strong>{e.cargo}</strong> — {e.empresa} ({e.inicio} to {e.fim})
<div className="text-xs text-gray-600 dark:text-gray-300">{e.descricao}</div>
</li>
))}
</ul>


<h3 className="mt-4 font-semibold">Habilidades Técnicas</h3>
<div className="mt-2 flex flex-wrap gap-2">
{profile.habilidadesTecnicas.map((s,i)=>(<span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{s}</span>))}
</div><h3 className="mt-4 font-semibold">Soft Skills & Interesses</h3>
<div className="mt-2 text-sm">
<div className="mb-2">Soft: {profile.softSkills.join(', ')}</div>
<div>Interesses: {profile.areaInteresses.join(', ')}</div>
</div>
</section>
</div>


<div className="mt-6 flex gap-3">
<button onClick={()=>onRecommend(profile)} className="px-4 py-2 bg-green-600 text-white rounded-md shadow">Recomendar profissional</button>
<button onClick={()=>onMessage(profile)} className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md">Enviar mensagem</button>
<a href={profile.projetos[0]?.link || '#'} target="_blank" rel="noreferrer" className="ml-auto self-center text-sm text-blue-600 dark:text-blue-400">Ver projeto</a>
</div>
</div>
</div>
)
}