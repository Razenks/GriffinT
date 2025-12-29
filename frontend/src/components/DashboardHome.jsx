import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  BarChart3, 
  TrendingUp, 
  Package, 
  Calendar, 
  Download, 
  Filter, 
  FileSpreadsheet,
  Printer,
  ChevronRight
} from 'lucide-react';

function DashboardHome() {
  // Dados fictícios para simular o banco de dados
  const stats = [
    { label: 'Valor em Estoque', value: 'R$ 12.450,00', color: 'border-l-4 border-emerald-500', icon: '💰' },
    { label: 'Produtos Cadastrados', value: '142', color: 'border-l-4 border-blue-500', icon: '📦' },
    { label: 'Estoque Baixo', value: '8 itens', color: 'border-l-4 border-red-500', icon: '⚠️', alert: true },
    { label: 'Saídas Hoje', value: '24', color: 'border-l-4 border-amber-500', icon: '📉' },
  ];

  return (
    // MUDANÇA PRINCIPAL: bg-slate-900 -> bg-slate-50 (Fundo claro, quase branco)
    <div className="p-6 bg-slate-50 min-h-screen font-sans">
      
      {/* Cabeçalho da Página */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-amber-600 flex items-center gap-2">
          <FileText size={32} /> Visão Geral
        </h1>
        {/* Ajustado para slate-600 para melhor leitura no fundo claro */}
        <p className="text-slate-600">Bem-vindo ao painel de controle GriffinT.</p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          // bg-white destaca o card sobre o fundo slate-50
          <div key={index} className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 ${stat.color} hover:shadow-md transition-all`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                <p className={`mt-2 text-2xl font-bold ${stat.alert ? 'text-red-600' : 'text-slate-800'}`}>{stat.value}</p>
              </div>
              <span className="text-2xl grayscale opacity-70">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Área de Conteúdo Inferior */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        
        {/* Tabela de Últimas Movimentações */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
             Últimas Movimentações
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">Produto</th>
                  <th className="px-4 py-3">Tipo</th>
                  <th className="px-4 py-3 text-right rounded-tr-lg">Qtd</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-700">Parafuso Sextavado</td>
                  <td className="px-4 py-3 text-red-600 bg-red-50 rounded-md font-medium text-xs w-min whitespace-nowrap">Saída</td>
                  <td className="px-4 py-3 text-right text-slate-700 font-bold">-50</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-700">Martelo de Borracha</td>
                  <td className="px-4 py-3 text-emerald-600 bg-emerald-50 rounded-md font-medium text-xs w-min whitespace-nowrap">Entrada</td>
                  <td className="px-4 py-3 text-right text-slate-700 font-bold">+10</td>
                </tr>
                 <tr className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3 font-medium text-slate-700">Cimento CP-II</td>
                  <td className="px-4 py-3 text-red-600 bg-red-50 rounded-md font-medium text-xs w-min whitespace-nowrap">Saída</td>
                  <td className="px-4 py-3 text-right text-slate-700 font-bold">-2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="mt-4 w-full text-center text-sm text-amber-600 font-bold hover:text-amber-700 hover:bg-amber-50 py-2 rounded-lg transition-colors flex items-center justify-center gap-1">
            Ver histórico completo <ChevronRight size={16} />
          </button>
        </div>

        {/* Ações Rápidas */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Ações Rápidas</h3>
            <div className="grid grid-cols-2 gap-4 h-full max-h-[250px]">
                <Link to={"/home/entrada"} className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-amber-400 hover:shadow-md transition-all group bg-slate-50/50">
                      <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">➕</span>
                      <span className="font-semibold text-slate-700 group-hover:text-amber-600">Nova Entrada</span>
                </Link>
                <Link to={"/home/saida"} className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-amber-400 hover:shadow-md transition-all group bg-slate-50/50">
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">➖</span>
                    <span className="font-semibold text-slate-700 group-hover:text-amber-600">Nova Saída</span>
                </Link>
                <Link to={"/home/novo-produto"} className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-amber-400 hover:shadow-md transition-all group bg-slate-50/50">
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">📦</span>
                    <span className="font-semibold text-slate-700 group-hover:text-amber-600">Novo Produto</span>
                </Link>
                <Link to={"/home/relatorios"} className="flex flex-col items-center justify-center p-4 border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-amber-400 hover:shadow-md transition-all group bg-slate-50/50">
                    <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">📄</span>
                    <span className="font-semibold text-slate-700 group-hover:text-amber-600">Relatório</span>
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardHome;