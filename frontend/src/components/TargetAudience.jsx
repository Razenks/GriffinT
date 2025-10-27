import React from 'react';

function TargetAudience () {
  return (
    <section id="publico" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Perfeito para Empresas que Buscam Crescer</h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10">
          Nossa solução é ideal para gestores que não têm tempo a perder e precisam de uma ferramenta robusta e confiável.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <span className="bg-slate-800 border border-slate-700 py-2 px-5 rounded-full">Pequenas e Médias Empresas</span>
          <span className="bg-slate-800 border border-slate-700 py-2 px-5 rounded-full">Indústrias e Manufatura</span>
          <span className="bg-slate-800 border border-slate-700 py-2 px-5 rounded-full">Distribuidores e Atacados</span>
          <span className="bg-slate-800 border border-slate-700 py-2 px-5 rounded-full">Empresas de Serviço</span>
          <span className="bg-slate-800 border border-slate-700 py-2 px-5 rounded-full">Varejo e E-commerce</span>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;