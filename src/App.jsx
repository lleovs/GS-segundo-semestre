import { useEffect, useState } from 'react';
import ProfessionalCard from './components/ProfessionalCard';
import ProfessionalModal from './components/ProfessionalModal';
import SearchFilters from './components/SearchFilters';

export default function App() {
  const [profiles, setProfiles] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ area: '', cidade: '', tecnologia: '' });
  const [dark, setDark] = useState(() => localStorage.getItem('dark') === 'true');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('dark', dark);
  }, [dark]);

  useEffect(() => {
    // busca o JSON local em public/data/profiles.json
    fetch('/data/profiles.json')
      .then(r => r.json())
      .then(data => {
        setProfiles(data);
        setFiltered(data);
      })
      .catch(err => {
        console.error('Erro carregando profiles.json', err);
      });
  }, []);

  useEffect(() => {
    const q = search.toLowerCase();
    const res = profiles.filter(p => {
      const matchSearch = !q || (
        p.nome.toLowerCase().includes(q) ||
        p.cargo.toLowerCase().includes(q) ||
        p.habilidadesTecnicas.join(' ').toLowerCase().includes(q)
      );
      const matchArea = !filters.area || p.area === filters.area;
      const matchCidade = !filters.cidade || p.localizacao === filters.cidade;
      const matchTech = !filters.tecnologia || p.habilidadesTecnicas.includes(filters.tecnologia);
      return matchSearch && matchArea && matchCidade && matchTech;
    });
    setFiltered(res);
  }, [search, filters, profiles]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Diretório de Profissionais</h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setDark(d => !d)} className="px-3 py-2 border rounded">
            {dark ? 'Light' : 'Dark'}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-6">
        <SearchFilters profiles={profiles} search={search} setSearch={setSearch} filters={filters} setFilters={setFilters} />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map(p => (
            <ProfessionalCard key={p.id} profile={p} onOpen={setSelected} />
          ))}
        </div>

        {filtered.length === 0 && <div className="text-center text-gray-500">Nenhum profissional encontrado.</div>}
      </main>

      {selected && <ProfessionalModal profile={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
