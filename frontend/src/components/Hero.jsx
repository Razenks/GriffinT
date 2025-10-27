import React from 'react';

function Hero () {
  return (
    <section id="home" className="relative container mx-auto px-6 pt-24 pb-32 text-center">
       {/* Efeito de gradiente radial no fundo para um visual moderno */}
      <div className="absolute inset-0 -z-10 bg-radial-gradient from-brand-blue to-transparent bg-center bg-no-repeat" style={{ backgroundSize: '40% 80%' }}></div>
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
        A Inteligência que sua Empresa Precisa. A Simplicidade que você Deseja.
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
        Conheça o <span className="font-bold text-brand-gold">GriffinT ERP</span>: a plataforma unificada que elimina o caos operacional, automatiza tarefas e entrega os dados que você precisa para crescer com segurança e estratégia.
      </p>
      <a 
        href="#contato" 
        className="bg-brand-gold text-brand-blue font-bold py-4 px-10 rounded-lg text-xl hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300"
      >
        Peça sua Demonstração Gratuita
      </a>
    </section>
  );
};

export default Hero;