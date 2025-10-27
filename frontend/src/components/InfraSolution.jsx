import React from 'react';

function InfraSolution() {
  return (
    <section id="desafio" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Coluna do Problema */}
          <div className="p-8 bg-slate-800/50 rounded-lg border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Sua infraestrutura de TI é um ponto de preocupação?</h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Rede lenta e instável que afeta a produtividade da equipe.</li>
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Falhas constantes em computadores, servidores e impressoras.</li>
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Preocupação com a segurança dos dados e vulnerabilidades.</li>
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Falta de um parceiro técnico confiável para resolver problemas rapidamente.</li>
            </ul>
          </div>

          {/* Coluna da Solução */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-brand-gold">A Solução é a Gestão Proativa e Especializada.</span>
            </h2>
            <p className="text-xl text-gray-300">
              Na GriffinT, não apenas "consertamos o que quebrou". Nós planejamos, implementamos e gerenciamos sua infraestrutura para prevenir problemas, otimizar o desempenho e garantir que sua tecnologia funcione como uma engrenagem perfeita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfraSolution;