import React from 'react';
function AutomationHero() {
  return (
    <section id="home" className="container mx-auto px-6 pt-24 pb-32 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        Liberte sua Equipe. Automatize o Futuro.
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
        Com a <span className="font-bold text-brand-gold">Automação Inteligente da GriffinT</span>, transformamos processos repetitivos e o atendimento ao cliente em uma vantagem competitiva, permitindo que sua equipe foque no que realmente gera valor.
      </p>
      <a
        href="#contato"
        className="bg-brand-gold text-brand-blue font-bold py-4 px-10 rounded-lg text-xl hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300"
      >
        Inicie sua Jornada de Automação
      </a>
    </section>
  );
}


export default AutomationHero;