import React from 'react';

function InfraWhyChoose() {
    const benefits = [
        { title: 'Atendimento Rápido', description: 'Equipe pronta para diagnosticar e resolver seus problemas com agilidade, minimizando o tempo de inatividade.' },
        { title: 'Foco em Segurança', description: 'Aplicamos as melhores práticas de segurança em cada projeto para proteger seus ativos mais valiosos.' },
        { title: 'Técnicos Certificados', description: 'Nossa equipe é composta por profissionais experientes e qualificados para lidar com qualquer desafio.' },
    ];
    
    return (
        <section className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Por que Escolher a GriffinT?</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map(benefit => (
                         <div key={benefit.title} className="p-8 bg-slate-800 rounded-lg border border-transparent hover:border-brand-gold/50 transition-colors">
                            <h3 className="text-xl font-bold text-brand-gold mb-3">{benefit.title}</h3>
                            <p className="text-gray-400">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InfraWhyChoose;