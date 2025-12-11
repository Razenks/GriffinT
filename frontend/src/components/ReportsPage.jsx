import React, { useState } from 'react';
import { 
  FileText, 
  BarChart3, 
  TrendingUp, 
  Package, 
  Calendar, 
  Download, 
  Filter, 
  FileSpreadsheet,
  Printer
} from 'lucide-react';

// Opções de relatórios disponíveis
// Ajustei as cores dos ícones para ficarem mais legíveis no fundo branco (ex: blue-400 -> blue-500)
const reportTypes = [
  { 
    id: 'inventory', 
    title: 'Posição de Estoque', 
    description: 'Relatório atual de todos os produtos, quantidades e valores acumulados.',
    icon: <Package size={24} className="text-blue-600" />
  },
  { 
    id: 'sales', 
    title: 'Vendas por Período', 
    description: 'Detalhamento de todas as saídas e faturamento num intervalo de tempo.',
    icon: <TrendingUp size={24} className="text-emerald-600" />
  },
  { 
    id: 'movement', 
    title: 'Entradas e Saídas', 
    description: 'Histórico completo de movimentações (audit trail) por usuário.',
    icon: <BarChart3 size={24} className="text-amber-600" />
  },
  { 
    id: 'low_stock', 
    title: 'Produtos em Baixa', 
    description: 'Lista de produtos abaixo do estoque mínimo para reposição.',
    icon: <Filter size={24} className="text-red-600" />
  }
];

// Mock de histórico recente
const recentReports = [
  { id: 1, name: 'Estoque_Fechamento_Nov.pdf', date: '01/12/2025', size: '2.4 MB' },
  { id: 2, name: 'Vendas_BlackFriday.xlsx', date: '30/11/2025', size: '850 KB' },
  { id: 3, name: 'Relatorio_Perdas.pdf', date: '25/11/2025', size: '1.2 MB' },
];

function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState(reportTypes[0]); 
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  return (
    // MUDANÇA: Fundo geral claro (slate-50) e texto base escuro (slate-700)
    <div className="p-6 bg-slate-50 min-h-screen text-slate-700 font-sans">
      
      {/* Cabeçalho */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-amber-600 flex items-center gap-2">
          <FileText size={32} /> Central de Relatórios
        </h1>
        <p className="text-slate-500 text-sm mt-1">Gere, exporte e visualize os dados do sistema.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Lado Esquerdo: Seleção do Tipo de Relatório */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reportTypes.map((report) => (
              <button
                key={report.id}
                onClick={() => setSelectedReport(report)}
                className={`p-5 rounded-xl border text-left transition-all hover:shadow-md group relative overflow-hidden ${
                  selectedReport.id === report.id 
                    ? 'bg-amber-50 border-amber-500 ring-1 ring-amber-500/50' // Selecionado: Fundo Amber claro
                    : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-slate-50' // Padrão: Branco
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className={`p-2 rounded-lg shadow-sm transition-colors ${selectedReport.id === report.id ? 'bg-white' : 'bg-slate-100'}`}>
                    {report.icon}
                  </div>
                  {selectedReport.id === report.id && (
                    <span className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
                  )}
                </div>
                {/* Ajuste de cor do título para contraste no light mode */}
                <h3 className={`font-bold text-lg mb-1 ${selectedReport.id === report.id ? 'text-amber-900' : 'text-slate-800'}`}>
                  {report.title}
                </h3>
                <p className={`text-sm leading-relaxed ${selectedReport.id === report.id ? 'text-amber-800/70' : 'text-slate-500'}`}>
                  {report.description}
                </p>
              </button>
            ))}
          </div>

          {/* Painel de Configuração do Relatório Selecionado */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm animate-fade-in">
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                {selectedReport.icon}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-800">Configurar: {selectedReport.title}</h2>
                <p className="text-xs text-slate-500">Defina os filtros antes de gerar.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Filtro de Data */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                  <Calendar size={16} /> Período Inicial
                </label>
                <input 
                  type="date" 
                  // Input: Fundo slate-50 para diferenciar do card branco
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  value={dateStart}
                  onChange={(e) => setDateStart(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600 flex items-center gap-2">
                  <Calendar size={16} /> Período Final
                </label>
                <input 
                  type="date" 
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  value={dateEnd}
                  onChange={(e) => setDateEnd(e.target.value)}
                />
              </div>
            </div>

            {/* Ações de Exportação */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-bold shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2">
                <Download size={20} /> Baixar PDF
              </button>
              {/* Botão Secundário Light */}
              <button className="flex-1 bg-white hover:bg-slate-50 text-slate-700 py-3 rounded-lg font-bold border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2">
                <FileSpreadsheet size={20} className="text-emerald-600" /> Exportar Excel
              </button>
              <button className="sm:w-auto px-4 bg-white hover:bg-slate-50 text-slate-600 hover:text-slate-800 py-3 rounded-lg border border-slate-300 shadow-sm transition-all" title="Imprimir Direto">
                <Printer size={20} />
              </button>
            </div>
          </div>

        </div>

        {/* Lado Direito: Histórico e Informações */}
        <div className="space-y-6">
          
          {/* Downloads Recentes */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Gerados Recentemente</h3>
              <button className="text-xs text-amber-600 hover:text-amber-700 font-medium">Ver todos</button>
            </div>
            <div className="divide-y divide-slate-100">
              {recentReports.map((file) => (
                <div key={file.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-100 p-2 rounded text-slate-500 group-hover:text-amber-600 transition-colors">
                      <FileText size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700 group-hover:text-slate-900 truncate max-w-[140px]">{file.name}</p>
                      <p className="text-xs text-slate-500">{file.date} • {file.size}</p>
                    </div>
                  </div>
                  <Download size={16} className="text-slate-400 group-hover:text-amber-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Dica / Info Box Light */}
          <div className="bg-amber-50 border border-amber-200 p-5 rounded-xl">
            <h4 className="text-amber-700 font-bold mb-2 flex items-center gap-2">
              <BarChart3 size={18} /> Dica Pro
            </h4>
            <p className="text-sm text-slate-600">
              Relatórios de "Movimentações" incluem detalhes de quem realizou cada alteração. Útil para auditoria interna.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ReportsPage;