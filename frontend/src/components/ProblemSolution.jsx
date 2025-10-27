import React from 'react';

function ProblemSolution () {
  return (
    <section id="solucao" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Coluna do Problema */}
          <div className="p-8 bg-slate-800/50 rounded-lg border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Sua operação parece um quebra-cabeça?</h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Informações espalhadas em planilhas e sistemas diferentes.</li>
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Dificuldade para saber o real estado do seu estoque e fluxo de caixa.</li>
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Processos manuais que consomem tempo e geram erros.</li>
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Tomada de decisão baseada em "achismos" por falta de dados confiáveis.</li>
            </ul>
          </div>

          {/* Coluna da Solução */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-brand-gold">A Solução é a Gestão Unificada.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              O GriffinT ERP integra todos os seus departamentos em um único lugar. Tenha controle total, desde a chegada do insumo até a entrega ao cliente final.
            </p>
            <p className="text-xl text-gray-300">
              Nossa plataforma transforma dados brutos em insights poderosos, permitindo que você foque no que realmente importa: a estratégia e o crescimento do seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;