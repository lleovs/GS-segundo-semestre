
export default function ProfessionalModal({ professional, onClose }) {
  if (!professional) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full p-6 shadow-xl overflow-y-auto max-h-[90vh]">
        
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            {professional.nome}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl"
          >
            ✕
          </button>
        </div>

        {/* FOTO + RESUMO */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={professional.foto}
            alt={professional.nome}
            className="w-28 h-28 rounded-full object-cover border"
          />
          <div>
            <p className="text-lg font-semibold dark:text-white">{professional.cargo}</p>
            <p className="text-gray-600 dark:text-gray-300">{professional.resumo}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {professional.localizacao}
            </p>
          </div>
        </div>

        {/* SEÇÕES */}
        <div className="space-y-6">

          {/* FORMAÇÃO */}
          <section>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Formação</h3>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
              {professional.formacao.map((f, i) => (
                <li key={i}>
                  {f.curso} — {f.instituicao} ({f.ano})
                </li>
              ))}
            </ul>
          </section>

          {/* EXPERIÊNCIAS */}
          <section>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Experiências</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              {professional.experiencias.map((exp, i) => (
                <li key={i} className="border-b pb-2 border-gray-300 dark:border-gray-600">
                  <p className="font-semibold">{exp.empresa} — {exp.cargo}</p>
                  <p className="text-sm text-gray-500">
                    {exp.inicio} até {exp.fim || "Atualmente"}
                  </p>
                  <p>{exp.descricao}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* HABILIDADES */}
          <section>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              Habilidades Técnicas
            </h3>
            <div className="flex flex-wrap gap-2">
              {professional.habilidadesTecnicas.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* SOFT SKILLS */}
          <section>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {professional.softSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-600 text-white rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* PROJETOS */}
          <section>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Projetos</h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              {professional.projetos.map((p, i) => (
                <li key={i}>
                  <a
                    href={p.link}
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    {p.titulo}
                  </a>
                  <p className="text-sm">{p.descricao}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* CERTIFICAÇÕES */}
          <section>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Certificações</h3>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
              {professional.certificacoes.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>

          {/* IDIOMAS */}
          <section>
            <h3 className="text-xl font-semibold mb-2 dark:text-white">Idiomas</h3>
            <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300">
              {professional.idiomas.map((l, i) => (
                <li key={i}>{l.idioma} — {l.nivel}</li>
              ))}
            </ul>
          </section>

        </div>

        {/* FOOTER – BOTÕES */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={() => alert(`Profissional recomendado: ${professional.nome}`)}
          >
            Recomendar Profissional
          </button>

          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            onClick={() => alert(`Mensagem enviada para ${professional.nome}`)}
          >
            Enviar Mensagem
          </button>
        </div>
      </div>
    </div>
  );
}
