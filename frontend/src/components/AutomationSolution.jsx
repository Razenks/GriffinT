import React from 'react';

function AutomationSolution () {
  return (
    <section id="desafio" className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Coluna do Problema */}
          <div className="p-8 bg-slate-800/50 rounded-lg border border-red-500/30">
            <h2 className="text-3xl font-bold text-white mb-6">Tarefas manuais estão freando seu crescimento?</h2>
            <ul className="space-y-4 text-gray-300 text-lg">
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Equipe sobrecarregada com tarefas repetitivas e de baixo valor.</li>
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Atendimento ao cliente lento e com capacidade limitada.</li>
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Processos suscetíveis a erros humanos que geram custos.</li>
              <li className="flex items-start"><span className="text-red-400 mr-3 mt-1">❌</span> Oportunidades perdidas pela falta de agilidade e disponibilidade 24/7.</li>
            </ul>
          </div>

          {/* Coluna da Solução */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              <span className="text-brand-gold">A Solução é a Inteligência Artificial em Ação.</span>
            </h2>
            <p className="text-xl text-gray-300">
              Nossas soluções de automação com IA atuam como uma força de trabalho digital incansável e precisa, executando tarefas com velocidade sobre-humana e liberando o potencial criativo e estratégico da sua equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
  


export default AutomationSolution;