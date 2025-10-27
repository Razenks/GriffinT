import React from 'react';

function InfraServices() {
// Ícones podem ser SVGs ou emojis
const servicesData = [
    {
        icon: '🌐',
        title: 'Redes e Conectividade',
        description: 'Projetamos e configuramos redes cabeadas e Wi-Fi de alta performance, seguras e estáveis. Garantimos que sua equipe e seus sistemas estejam sempre conectados com máxima velocidade e segurança.'
    },
    {
        icon: '🖥️',
        title: 'Estações de Trabalho',
        description: 'Realizamos a manutenção, otimização e reparo de computadores e notebooks. Desde a remoção de vírus e lentidão até upgrades de hardware para maximizar a produtividade dos seus colaboradores.'
    },
    {
        icon: '🖨️',
        title: 'Servidores e Data Centers',
        description: 'Oferecemos serviços completos para servidores físicos e virtuais: instalação, configuração, monitoramento, backup e manutenção para garantir a integridade e a disponibilidade contínua dos seus dados.'
    },
    {
        icon: '📠',
        title: 'Periféricos e Impressoras',
        description: 'Configuramos e solucionamos problemas em impressoras, scanners e outros periféricos em rede. Asseguramos que todo o seu ambiente de trabalho funcione de forma integrada e sem falhas.'
    }
];


    return (
        <section id="servicos" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Nossos Serviços de Infraestrutura</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">Uma cobertura completa para todas as suas necessidades de TI.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {servicesData.map((service) => (
                        <div key={service.title} className="bg-slate-800 p-8 rounded-lg border border-slate-700 flex items-start gap-6 hover:border-brand-gold transition-colors duration-300">
                            <div className="text-5xl mt-1">{service.icon}</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InfraServices;