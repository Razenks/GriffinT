import React, { useState } from 'react';
import { 
  ArrowDownLeft, 
  Save, 
  Calendar, 
  Package, 
  DollarSign, 
  FileText, 
  Truck,
  History
} from 'lucide-react';

function InputPage() {
  // Mock de histórico recente de entradas
  const recentEntries = [
    { id: 1, product: 'Parafuso Sextavado', qty: 1000, date: 'Hoje, 09:41', supplier: 'Metalúrgica Aço Forte' },
    { id: 2, product: 'Martelo de Borracha', qty: 50, date: 'Ontem', supplier: 'Ferramentas do Sul' },
  ];

  const [formData, setFormData] = useState({
    product: '',
    quantity: '',
    costPrice: '',
    total: 0,
    supplier: '',
    invoice: ''
  });

  // Cálculo automático do total
  const handleCalculateTotal = (qty, price) => {
    const q = parseFloat(qty) || 0;
    const p = parseFloat(price) || 0;
    return (q * p).toFixed(2);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newFormData = { ...formData, [name]: value };

    if (name === 'quantity' || name === 'costPrice') {
       newFormData.total = handleCalculateTotal(
         name === 'quantity' ? value : formData.quantity,
         name === 'costPrice' ? value : formData.costPrice
       );
    }
    setFormData(newFormData);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen text-slate-600 font-sans">
      
      {/* Cabeçalho */}
      <div className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-emerald-600 flex items-center gap-2">
          <ArrowDownLeft size={32} /> Entrada de Produtos
        </h1>
        <p className="text-slate-500 text-sm mt-1">Registre o recebimento de mercadorias e atualize o estoque.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Lado Esquerdo: Formulário de Entrada */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FileText className="text-emerald-600" size={20} /> Dados da Nota
            </h2>

            <form className="space-y-6">
              {/* Seleção de Produto */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Produto</label>
                <div className="relative">
                    <select 
                        name="product"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none appearance-none"
                    >
                        <option value="">Selecione o produto...</option>
                        <option value="1">Parafuso Sextavado</option>
                        <option value="2">Martelo de Borracha</option>
                    </select>
                    <Package className="absolute right-3 top-3 text-slate-400" size={18} />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {/* Quantidade */}
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Quantidade</label>
                    <input 
                        type="number" 
                        name="quantity"
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                        placeholder="0"
                    />
                 </div>
                 {/* Custo Unitário */}
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Custo Unit. (R$)</label>
                    <input 
                        type="number" 
                        name="costPrice"
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                        placeholder="0,00"
                    />
                 </div>
                 {/* Total Calculado */}
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Total da Nota</label>
                    <div className="w-full bg-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 text-slate-500 font-bold flex items-center gap-1">
                        R$ {formData.total}
                    </div>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Fornecedor */}
                 <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Fornecedor</label>
                    <div className="relative">
                        <input 
                            type="text" 
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                            placeholder="Nome do fornecedor"
                        />
                        <Truck className="absolute right-3 top-3 text-slate-400" size={18} />
                    </div>
                 </div>
                 {/* Nº Nota Fiscal e Data */}
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Nº NFe</label>
                        <input type="text" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Data</label>
                        <input type="date" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:outline-none" />
                    </div>
                 </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button type="button" className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all">
                  <Save size={20} /> Confirmar Entrada
                </button>
              </div>

            </form>
          </div>
        </div>

        {/* Lado Direito: Resumo e Histórico */}
        <div className="space-y-6">
          
          {/* Card Informativo */}
          <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-xl">
            <h4 className="text-emerald-700 font-bold mb-2 flex items-center gap-2">
              <DollarSign size={18} /> Impacto no Custo Médio
            </h4>
            <p className="text-sm text-slate-600">
              O sistema recalculará automaticamente o preço médio de custo deste produto com base nesta entrada.
            </p>
          </div>

          {/* Últimas Entradas */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
             <div className="p-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
               <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <History size={16} /> Entradas Recentes
               </h3>
             </div>
             <div className="divide-y divide-slate-100">
                {recentEntries.map((entry) => (
                   <div key={entry.id} className="p-4 hover:bg-slate-50 transition-colors">
                      <p className="font-bold text-slate-700">{entry.product}</p>
                      <div className="flex justify-between items-center mt-1">
                         <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                            <ArrowDownLeft size={10} /> +{entry.qty}
                         </span>
                         <span className="text-xs text-slate-400">{entry.date}</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-1 truncate">{entry.supplier}</p>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default InputPage;