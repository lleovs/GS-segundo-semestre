import { useState } from 'react';

export default function ProfessionalModal({ profile, onClose }) {
  const [msg, setMsg] = useState('');
  if (!profile) return null;

  const handleRecommend = () => {
    alert(`Você recomendou ${profile.nome}! ✅`);
  };

  const handleSendMessage = () => {
    if (!msg.trim()) {
      alert('Escreva uma mensagem antes de enviar.');
      return;
    }
    // simula envio
    alert(`Mensagem enviada para ${profile.nome}: "${msg}"`);
    setMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative max-w-4xl w-full bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-auto max-h-[90vh]">
        <div className="flex items-start gap-4 p-6 border-b dark:border-gray-800">
          <img src={profile.foto} alt={profile.nome} className="w-24 h-24 rounded-full object-cover" />
          <div className="flex-1">
            <h2 className="text-2xl font-bold">{profile.nome}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300">{profile.cargo} • {profile.localizacao}</p>
            <p className="mt-2 text-gray-700 dark:text-gray-300">{profile.resumo}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.habilidadesTecnicas.map((t,i) => <span key={i} className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">{t}</span>)}
            </div>
          </div>

          <div className="ml-auto flex flex-col gap-2">
            <button className="px-3 py-2 bg-green-600 text-white rounded" onClick={handleRecommend}>Recomendar profissional</button>
            <button className="px-3 py-2 border rounded" onClick={() => { document.getElementById('message-input')?.focus(); }}>Enviar mensagem</button>
            <button className="px-3 py-2 text-sm text-gray-500" onClick={onClose}>Fechar</button>
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <h3 className="font-semibold mb-2">Formação</h3>
            <ul className="space-y-2 text-sm">
              {profile.formacao.map((f,idx) => (
                <li key={idx}>
                  <div className="font-medium">{f.curso}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">{f.instituicao} • {f.ano}</div>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Experiências</h3>
            <ul className="space-y-2 text-sm">
              {profile.experiencias.map((e,idx) => (
                <li key={idx}>
                  <div className="font-medium">{e.cargo} — {e.empresa}</div>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">{e.inicio} → {e.fim}</div>
                  <div className="text-gray-600 dark:text-gray-300 text-sm">{e.descricao}</div>
                </li>
              ))}
            </ul>
          </section>

          <section className="md:col-span-2">
            <h3 className="font-semibold mb-2">Soft skills & Hobbies</h3>
            <div className="flex flex-wrap gap-2">
              {profile.softSkills.map((s, i) => <span key={i} className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">{s}</span>)}
            </div>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Projetos</h3>
            <ul className="space-y-2 text-sm">
              {profile.projetos.length ? profile.projetos.map((p, idx) => (
                <li key={idx}>
                  <a href={p.link} target="_blank" rel="noreferrer" className="font-medium text-indigo-600 dark:text-indigo-400">{p.titulo}</a>
                  <div className="text-gray-500 dark:text-gray-400 text-xs">{p.descricao}</div>
                </li>
              )) : <div className="text-sm text-gray-500">Nenhum projeto listado.</div>}
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Certificações & Idiomas</h3>
            <div className="text-sm">
              <div className="mb-2">
                {profile.certificacoes.length ? profile.certificacoes.map((c,i)=>(<div key={i} className="text-gray-700 dark:text-gray-300">{c}</div>)) : <div className="text-gray-500">Sem certificações</div>}
              </div>
              <div className="mt-1">
                {profile.idiomas.map((l,i) => (<div key={i} className="text-gray-700 dark:text-gray-300">{l.idioma} — {l.nivel}</div>))}
              </div>
            </div>
          </section>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-2">Enviar mensagem</h3>
            <div className="flex gap-2">
              <input id="message-input" value={msg} onChange={(e)=>setMsg(e.target.value)} className="flex-1 border px-3 py-2 rounded dark:bg-gray-800 dark:border-gray-700" placeholder="Escreva uma mensagem..." />
              <button onClick={handleSendMessage} className="px-4 py-2 bg-blue-600 text-white rounded">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
