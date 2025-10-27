import React from 'react';

function InfraMain() {
  return (
    <section id="home" className="container mx-auto px-6 pt-24 pb-32 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        A Base Sólida para sua Operação Digital.
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-10">
        Garanta performance, segurança e disponibilidade com os <span className="font-bold text-brand-gold">Serviços de Infraestrutura da GriffinT</span>. Cuidamos da sua tecnologia para que você possa cuidar do seu negócio sem interrupções.
      </p>
      <a 
        href="#contato" 
        className="bg-brand-gold text-brand-blue font-bold py-4 px-10 rounded-lg text-xl hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300"
      >
        Fale com um Especialista
      </a>
    </section>
  );
}

export default InfraMain;