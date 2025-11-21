import { useState } from "react";
import profiles from "../public/data/profiles.json";

import ProfessionalCard from "./components/ProfessionalCard";
import ProfessionalModal from "./components/ProfessionalModal";
import SearchFilters from "./components/SearchFilters";

export default function App() {
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    area: "",
    cidade: "",
    tecnologia: "",
  });

  const filtered = profiles.filter((p) => {
    const s = p.nome.toLowerCase().includes(search.toLowerCase());
    const a = filters.area ? p.area === filters.area : true;
    const c = filters.cidade ? p.localizacao.includes(filters.cidade) : true;
    const t = filters.tecnologia
      ? p.habilidadesTecnicas.includes(filters.tecnologia)
      : true;
    return s && a && c && t;
  });

  const html = document.documentElement;

  if (isDark) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      <NavBar isDark={isDark} setIsDark={setIsDark} />

      <main className="max-w-6xl mx-auto p-6">
        <SearchFilters
          search={search}
          setSearch={setSearch}
          filters={filters}
          setFilters={setFilters}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filtered.map((p) => (
            <ProfessionalCard
              key={p.id}
              profile={p}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </main>

      {selected && (
        <ProfessionalModal
          professional={selected}
          open={true}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
}
