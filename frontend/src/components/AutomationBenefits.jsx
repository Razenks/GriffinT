import React from 'react';

function KeyBenefits() {
  const benefits = [
    { icon: '💰', title: 'Redução Drástica de Custos', description: 'Diminua os custos operacionais ao automatizar horas de trabalho manual.' },
    { icon: '📈', title: 'Produtividade Exponencial', description: 'Permita que sua equipe produza mais em menos tempo, focando em inovação.' },
    { icon: '✨', title: 'Qualidade e Precisão', description: 'Minimize erros humanos em processos críticos e garanta consistência.' },
    { icon: '😊', title: 'Experiência do Cliente Elevada', description: 'Ofereça respostas instantâneas e atendimento disponível a qualquer hora do dia.' },
  ];

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Resultados que Falam por Si</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(benefit => (
            <div key={benefit.title} className="text-center p-6 bg-slate-800 rounded-lg">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default KeyBenefits;