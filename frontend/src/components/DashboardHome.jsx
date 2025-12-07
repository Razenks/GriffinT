import React from 'react';

function DashboardHome() {
  // Dados fictícios para simular o banco de dados
  const stats = [
    { label: 'Valor em Estoque', value: 'R$ 12.450,00', color: 'border-l-4 border-emerald-500', icon: '💰' },
    { label: 'Produtos Cadastrados', value: '142', color: 'border-l-4 border-blue-500', icon: '📦' },
    { label: 'Estoque Baixo', value: '8 itens', color: 'border-l-4 border-red-500', icon: '⚠️', alert: true },
    { label: 'Saídas Hoje', value: '24', color: 'border-l-4 border-amber-500', icon: '📉' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Cabeçalho da Página */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Visão Geral</h1>
        <p className="text-slate-500">Bem-vindo ao painel de controle GriffinT.</p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`bg-white rounded-lg shadow-sm p-6 ${stat.color} hover:shadow-md transition-shadow`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</p>
                <p className={`mt-2 text-2xl font-bold ${stat.alert ? 'text-red-600' : 'text-slate-900'}`}>{stat.value}</p>
              </div>
              <span className="text-2xl grayscale opacity-50">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Área de Ações Rápidas (Substitui o antigo menu de botões) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Últimas Movimentações (Tabela Simples) */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Últimas Movimentações</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500">
                <tr>
                  <th className="px-4 py-2">Produto</th>
                  <th className="px-4 py-2">Tipo</th>
                  <th className="px-4 py-2 text-right">Qtd</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3">Parafuso Sextavado</td>
                  <td className="px-4 py-3 text-red-500">Saída</td>
                  <td className="px-4 py-3 text-right">-50</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Martelo de Borracha</td>
                  <td className="px-4 py-3 text-emerald-600">Entrada</td>
                  <td className="px-4 py-3 text-right">+10</td>
                </tr>
                 <tr>
                  <td className="px-4 py-3">Cimento CP-II</td>
                  <td className="px-4 py-3 text-red-500">Saída</td>
                  <td className="px-4 py-3 text-right">-2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="mt-4 w-full text-center text-sm text-amber-600 font-medium hover:text-amber-700">
            Ver histórico completo →
          </button>
        </div>

        {/* Atalhos */}
        <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Ações Rápidas</h3>
            <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-amber-500 transition-colors group">
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">➕</span>
                    <span className="font-medium text-slate-700">Nova Entrada</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-amber-500 transition-colors group">
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">➖</span>
                    <span className="font-medium text-slate-700">Nova Saída</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-amber-500 transition-colors group">
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">📦</span>
                    <span className="font-medium text-slate-700">Novo Produto</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-amber-500 transition-colors group">
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">📄</span>
                    <span className="font-medium text-slate-700">Relatório</span>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;