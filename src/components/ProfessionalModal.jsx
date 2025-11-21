export default function ProfessionalModal({ professional, onClose }) {
    if (!professional) return null;
  
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-800 rounded-xl w-full max-w-2xl p-6 shadow-lg overflow-y-auto max-h-[90vh]">
          
          {/* Título */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {professional.nome}
            </h2>
  
            <button
              onClick={onClose}
              className="text-gray-600 dark:text-gray-300 hover:text-red-500 text-xl"
            >
              ✕
            </button>
          </div>
  
          {/* Infos principais */}
          <div className="flex items-center gap-4 mb-4">
            <img
              src={professional.foto}
              alt={professional.nome}
              className="w-20 h-20 rounded-full object-cover"
            />
  
            <div>
              <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {professional.cargo}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {professional.localizacao}
              </p>
            </div>
          </div>
  
          {/* Resumo */}
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {professional.resumo}
          </p>
  
          {/* Hard skills */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
            Habilidades Técnicas
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {professional.habilidadesTecnicas?.map((h, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-blue-900 dark:text-white rounded-md text-sm"
              >
                {h}
              </span>
            ))}
          </div>
  
          {/* Soft skills */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
            Soft Skills & Hobbies
          </h3>
          <ul className="list-disc ml-5 text-gray-700 dark:text-gray-300">
            {professional.softSkills?.map((s, index) => (
              <li key={index}>{s}</li>
            ))}
          </ul>
  
          {/* Experiências */}
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
            Experiências
          </h3>
          <ul className="text-gray-700 dark:text-gray-300 mt-2">
            {professional.experiencias?.map((exp, index) => (
              <li key={index} className="mb-2">
                <strong>{exp.empresa}</strong> — {exp.cargo}
                <br />
                <span className="text-sm opacity-80">
                  {exp.inicio} até {exp.fim}
                </span>
                <br />
                <span>{exp.descricao}</span>
              </li>
            ))}
          </ul>
  
          {/* Botões de ação */}
          <div className="flex justify-end gap-4 mt-8">
            <button
              className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
              onClick={() => alert("Profissional recomendado!")}
            >
              Recomendar profissional
            </button>
  
            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
              onClick={() => alert("Mensagem enviada!")}
            >
              Enviar mensagem
            </button>
          </div>
  
        </div>
      </div>
    );
  }
  