import { useMemo } from 'react';

export default function SearchFilters({ profiles, search, setSearch, filters, setFilters }) {
  // generate unique options
  const areas = useMemo(() => Array.from(new Set(profiles.map(p => p.area))).sort(), [profiles]);
  const cidades = useMemo(() => Array.from(new Set(profiles.map(p => p.localizacao))).sort(), [profiles]);
  const tecnologias = useMemo(() =>
    Array.from(new Set(profiles.flatMap(p => p.habilidadesTecnicas))).sort(), [profiles]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row gap-3">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nome, cargo, skill..."
          className="flex-1 px-3 py-2 border rounded dark:bg-gray-900 dark:border-gray-700"
        />
        <select value={filters.area} onChange={(e)=>setFilters({...filters, area:e.target.value})}
          className="px-3 py-2 border rounded dark:bg-gray-900 dark:border-gray-700">
          <option value="">Todas as áreas</option>
          {areas.map(a => <option key={a} value={a}>{a}</option>)}
        </select>

        <select value={filters.cidade} onChange={(e)=>setFilters({...filters, cidade:e.target.value})}
          className="px-3 py-2 border rounded dark:bg-gray-900 dark:border-gray-700">
          <option value="">Todas as cidades</option>
          {cidades.map(c => <option key={c} value={c}>{c}</option>)}
        </select>

        <select value={filters.tecnologia} onChange={(e)=>setFilters({...filters, tecnologia:e.target.value})}
          className="px-3 py-2 border rounded dark:bg-gray-900 dark:border-gray-700">
          <option value="">Todas as tecnologias</option>
          {tecnologias.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
    </div>
  );
}
