import React from 'react';

function AutomationServices() {
  const services = [
    {
      icon: '💬',
      title: 'Automação de Atendimento com IA',
      description: 'Implementamos chatbots e voicebots inteligentes que resolvem as dúvidas mais comuns dos seus clientes 24/7, realizam triagens e transferem apenas os casos complexos para atendentes humanos. Reduza o tempo de espera e aumente a satisfação.'
    },
    {
      icon: '⚙️',
      title: 'Automação de Processos (RPA)',
      description: 'Nossos "robôs" de software (RPA) executam tarefas repetitivas em qualquer sistema: preenchimento de formulários, extração e inserção de dados, geração de relatórios e muito mais. Elimine erros e acelere seus processos internos.'
    },
    {
      icon: '📑',
      title: 'Inteligência de Documentos',
      description: 'Utilizamos IA para ler, entender e extrair informações valiosas de documentos não estruturados como notas fiscais, contratos e e-mails. Automatize a entrada de dados e a organização de documentos de forma rápida e precisa.'
    },
  ];

  return (
    <section id="servicos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Nossas Soluções de Automação</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">Desenvolvemos projetos sob medida para atacar seus maiores gargalos de eficiência.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-brand-gold hover:-translate-y-2 transition-all duration-300">
              <div className="text-5xl mb-5">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default AutomationServices;