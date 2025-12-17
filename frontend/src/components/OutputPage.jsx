import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Save, 
  User, 
  Package, 
  AlertCircle, 
  FileText,
  History
} from 'lucide-react';

function OutputPage() {
  // Mock de histórico recente de saídas
  const recentExits = [
    { id: 1, product: 'Cimento CP-II', qty: 20, date: 'Hoje, 10:15', reason: 'Venda Balcão' },
    { id: 2, product: 'Lixadeira Orbital', qty: 1, date: 'Hoje, 08:30', reason: 'Venda Online' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen text-slate-600 font-sans">
      
      {/* Cabeçalho */}
      <div className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-red-600 flex items-center gap-2">
          <ArrowUpRight size={32} /> Saída de Produtos
        </h1>
        <p className="text-slate-500 text-sm mt-1">Registre vendas, perdas, devoluções ou uso interno.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Lado Esquerdo: Formulário de Saída */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FileText className="text-red-600" size={20} /> Detalhes da Movimentação
            </h2>

            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Seleção de Produto */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Produto</label>
                    <div className="relative">
                        <select className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none appearance-none">
                            <option value="">Selecione o produto...</option>
                            <option value="1">Parafuso Sextavado (Estoque: 1200)</option>
                            <option value="3">Cimento CP-II (Estoque: 40)</option>
                        </select>
                        <Package className="absolute right-3 top-3 text-slate-400" size={18} />
                    </div>
                </div>

                {/* Motivo da Saída */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Saída</label>
                    <select className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none">
                        <option value="venda">Venda</option>
                        <option value="perda">Perda / Avaria</option>
                        <option value="uso_interno">Uso Interno</option>
                        <option value="devolucao">Devolução ao Fornecedor</option>
                    </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Quantidade */}
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Quantidade</label>
                    <input 
                        type="number" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                        placeholder="0"
                    />
                 </div>
                 {/* Preço de Venda (Opcional) */}
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Valor Venda (Unit.)</label>
                    <input 
                        type="number" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                        placeholder="0,00"
                    />
                 </div>
                 {/* Data */}
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Data</label>
                    <input type="date" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:outline-none" />
                 </div>
              </div>

              {/* Destinatário / Cliente */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Cliente / Destinatário (Opcional)</label>
                <div className="relative">
                    <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                        placeholder="Nome do cliente ou departamento"
                    />
                    <User className="absolute right-3 top-3 text-slate-400" size={18} />
                </div>
              </div>

              {/* Observações */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Observações</label>
                <textarea 
                    className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none h-24 resize-none"
                    placeholder="Detalhes adicionais sobre a saída..."
                ></textarea>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button type="button" className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold shadow-lg shadow-red-500/20 flex items-center gap-2 transition-all">
                  <Save size={20} /> Confirmar Saída
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* Lado Direito: Alertas e Histórico */}
        <div className="space-y-6">
          
          {/* Alerta de Validação */}
          <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
            <h4 className="text-red-700 font-bold mb-2 flex items-center gap-2">
              <AlertCircle size={18} /> Atenção
            </h4>
            <p className="text-sm text-slate-600">
              A saída será debitada imediatamente do estoque físico. Verifique se a quantidade está disponível.
            </p>
          </div>

          {/* Últimas Saídas */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
               <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <History size={16} /> Saídas Recentes
               </h3>
             </div>
             <div className="divide-y divide-slate-100">
                {recentExits.map((exit) => (
                   <div key={exit.id} className="p-4 hover:bg-slate-50 transition-colors">
                      <p className="font-bold text-slate-700">{exit.product}</p>
                      <div className="flex justify-between items-center mt-1">
                         <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded flex items-center gap-1">
                            <ArrowUpRight size={10} /> -{exit.qty}
                         </span>
                         <span className="text-xs text-slate-400">{exit.date}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 truncate">{exit.reason}</p>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OutputPage;