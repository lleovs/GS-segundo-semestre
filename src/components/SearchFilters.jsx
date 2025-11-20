export default function SearchFilters({ search, setSearch, filters, setFilters }) {
    return (
    <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
    <input className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700" placeholder="Buscar por nome..." value={search} onChange={(e) => setSearch(e.target.value)} />
    <input className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700" placeholder="Filtrar por área" value={filters.area} onChange={(e) => setFilters({ ...filters, area: e.target.value })} />
    <input className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700" placeholder="Filtrar por cidade" value={filters.cidade} onChange={(e) => setFilters({ ...filters, cidade: e.target.value })} />
    <input className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700" placeholder="Filtrar por tecnologia" value={filters.tecnologia} onChange={(e) => setFilters({ ...filters, tecnologia: e.target.value })} />
    </div>
    );
    }