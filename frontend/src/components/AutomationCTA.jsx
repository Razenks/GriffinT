import React from 'react';
function AutomationCTA() {
  return (
    <section id="contato" className="py-20 bg-slate-900/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Vamos Mapear suas Oportunidades de Automação?</h2>
          <p className="text-lg text-gray-400 mt-4">Preencha o formulário e receba uma análise gratuita do potencial de automação da sua empresa.</p>
        </div>
        <div className="max-w-2xl mx-auto bg-slate-800 p-8 rounded-lg border border-slate-700">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Seu nome</label>
              <input type="text" id="name" name="name" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" placeholder="João da Silva" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-mail corporativo</label>
              <input type="email" id="email" name="email" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" placeholder="joao.silva@suaempresa.com" />
            </div>
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-300 mb-2">Qual setor você gostaria de automatizar?</label>
              <input type="text" id="department" name="department" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" placeholder="Ex: Atendimento, Financeiro, RH..." />
            </div>
            <div className="text-center pt-4">
              <button type="submit" className="w-full bg-brand-gold text-brand-blue font-bold py-4 px-10 rounded-lg text-xl hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300">
                Solicitar Análise Gratuita
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


export default AutomationCTA;