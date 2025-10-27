import React from 'react';

function InfraCTA() {
  return (
    <section id="contato" className="py-20 bg-slate-900/70">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Pronto para ter uma Infraestrutura Confiável?</h2>
          <p className="text-lg text-gray-400 mt-4">Deixe-nos cuidar da sua TI. Peça um orçamento sem compromisso.</p>
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
              <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Qual serviço você precisa?</label>
              <textarea id="service" name="service" rows="4" className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-gold focus:border-brand-gold outline-none transition" placeholder="Ex: Preciso configurar uma nova rede, consertar um servidor..."></textarea>
            </div>
            <div className="text-center pt-4">
              <button type="submit" className="w-full bg-brand-gold text-brand-blue font-bold py-4 px-10 rounded-lg text-xl hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300">
                Solicitar Orçamento
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default InfraCTA;