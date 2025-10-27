import React from 'react';

function DetailedFeatures () {
const modulesData = [
  { icon: '💰', title: 'Financeiro', description: 'Visão total da saúde financeira com contas a pagar/receber, fluxo de caixa e relatórios.' },
  { icon: '🧾', title: 'Faturamento e NF-e', description: 'Emissão de notas fiscais (NF-e/NFS-e) e controle de pedidos com agilidade e conformidade fiscal.' },
  { icon: '📦', title: 'Estoque e Logística', description: 'Controle de entradas/saídas, inventário, lote e rastreabilidade para evitar perdas.' },
  { icon: '🧍', title: 'Clientes (CRM)', description: 'Gestão de pipeline de vendas, histórico e follow-ups para aumentar a conversão e fidelização.' },
  { icon: '🏭', title: 'Compras e Fornecedores', description: 'Cotação, pedidos de compra e avaliação de fornecedores para reduzir custos.' },
  { icon: '👩‍💼', title: 'Recursos Humanos', description: 'Centralize dados de colaboradores, folha de pagamento, ponto e benefícios.' },
  { icon: '⚙️', title: 'Produção (Opcional)', description: 'Ideal para indústrias, com ordens de produção, controle de insumos e etapas.' },
  { icon: '📈', title: 'Relatórios e Dashboards', description: 'KPIs, gráficos dinâmicos e painéis em tempo real para apoiar decisões estratégicas.' },
  { icon: '👥', title: 'Multiusuário e Multiempresa', description: 'Perfis de acesso e relatórios por filial para escalar com seu crescimento.' },
  { icon: '🤖', title: 'Integração com IA', description: 'Um copiloto interno que gera relatórios e responde dúvidas por texto ou voz.' },
];

const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 hover:border-brand-gold hover:-translate-y-2 transition-all duration-300">
        <div className="text-5xl mb-5">{icon}</div>
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-base leading-relaxed">{description}</p>
    </div>
);


    return (
        <section id="modulos" className="py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Uma Ferramenta para Cada Setor da sua Empresa</h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">O GriffinT ERP é modular e flexível, se adaptando perfeitamente às suas necessidades.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modulesData.map((module) => <FeatureCard key={module.title} {...module} />)}
                </div>
            </div>
        </section>
    );
};

export default DetailedFeatures;