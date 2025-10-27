import React from 'react';

function AiFeature () {
    return (
        <section className="py-20 bg-black/20">
            <div className="container mx-auto px-6">
                <div className="bg-slate-800 rounded-lg p-10 md:p-16 flex flex-col md:flex-row items-center gap-10 border border-brand-gold/30">
                    <div className="text-center md:text-left md:w-1/2">
                        <h3 className="text-sm font-bold uppercase text-brand-gold tracking-widest mb-2">NOSSO DIFERENCIAL</h3>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Conheça o Griffin AI: Seu Copiloto de Gestão</h2>
                        <p className="text-lg text-gray-300 mb-6">
                            Imagine perguntar ao seu sistema: "Qual foi nosso produto mais vendido no último trimestre?" e receber um relatório completo instantaneamente. Com o nosso assistente de IA integrado, isso é realidade.
                        </p>
                        <ul className="space-y-3 text-gray-300 text-lg">
                            <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span> Gere relatórios complexos com simples comandos de voz ou texto.</li>
                            <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span> Obtenha insights e previsões sem precisar de um analista de dados.</li>
                            <li className="flex items-center"><span className="text-brand-gold mr-3">✓</span> Agilize o treinamento de novas equipes, que podem "conversar" com o ERP.</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        {/* Você pode substituir este emoji por um ícone ou ilustração vetorial */}
                        <span className="text-9xl md:text-[12rem] opacity-80">🤖</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiFeature;