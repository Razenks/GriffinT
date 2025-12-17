import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PackagePlus, 
  Save, 
  Image as ImageIcon, 
  Barcode, 
  Layers, 
  DollarSign, 
  AlertCircle,
  X
} from 'lucide-react';

function NewProductPage() {
  const [formData, setFormData] = useState({
    name: '',
    sku: '',
    category: '',
    description: '',
    costPrice: '',
    margin: '',
    salePrice: '',
    stockQty: '',
    minStock: ''
  });

  // Lógica simples: Calcula preço de venda baseado no custo + margem
  const handlePriceCalculation = (e) => {
    const { name, value } = e.target;
    let newData = { ...formData, [name]: value };

    if (name === 'costPrice' || name === 'margin') {
      const cost = parseFloat(name === 'costPrice' ? value : formData.costPrice) || 0;
      const margin = parseFloat(name === 'margin' ? value : formData.margin) || 0;
      
      if (cost > 0) {
        const sale = cost + (cost * (margin / 100));
        newData.salePrice = sale.toFixed(2);
      }
    }
    setFormData(newData);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen text-slate-600 font-sans">
      
      {/* Cabeçalho */}
      <div className="mb-8 border-b border-slate-200 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-amber-600 flex items-center gap-2">
            <PackagePlus size={32} /> Novo Produto
          </h1>
          <p className="text-slate-500 text-sm mt-1">Preencha as informações para adicionar um item ao catálogo.</p>
        </div>
        
        <div className="flex gap-3">
            <Link to={"/home/estoque"} className="px-4 py-2 bg-white border border-slate-300 text-slate-600 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                Cancelar
            </Link>
            <button className="px-6 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all">
                <Save size={18} /> Salvar Produto
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna Esquerda: Informações Principais */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Card: Dados Básicos */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Layers className="text-amber-600" size={20} /> Informações Básicas
            </h2>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Nome do Produto</label>
                    <input 
                        type="text" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none transition-all placeholder:text-slate-400"
                        placeholder="Ex: Parafuso Sextavado 1/4"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Categoria</label>
                        <select className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none appearance-none">
                            <option value="">Selecione...</option>
                            <option value="ferragens">Ferragens</option>
                            <option value="ferramentas">Ferramentas</option>
                            <option value="eletrica">Elétrica</option>
                            <option value="hidraulica">Hidráulica</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">Código SKU / Referência</label>
                        <div className="relative">
                            <input 
                                type="text" 
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none"
                                placeholder="COD-0000"
                            />
                            <Barcode className="absolute right-3 top-3 text-slate-400" size={18} />
                        </div>
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Descrição Detalhada</label>
                    <textarea 
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2.5 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none h-32 resize-none"
                        placeholder="Especificações técnicas, material, marca, etc..."
                    ></textarea>
                </div>
            </div>
          </div>

          {/* Card: Imagem */}
          <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
             <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <ImageIcon className="text-amber-600" size={20} /> Imagem do Produto
            </h2>
            
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50 hover:bg-amber-50 hover:border-amber-300 transition-colors cursor-pointer group">
                <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                    <ImageIcon size={32} className="text-slate-400 group-hover:text-amber-500" />
                </div>
                <p className="text-slate-600 font-medium group-hover:text-amber-700">Clique para fazer upload</p>
                <p className="text-slate-400 text-sm">ou arraste e solte o arquivo aqui (JPG, PNG)</p>
            </div>
          </div>

        </div>

        {/* Coluna Direita: Detalhes e Valores */}
        <div className="space-y-6">
          
          {/* Precificação */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
             <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
               <DollarSign size={18} className="text-emerald-600" /> Precificação
             </h2>
             
             <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Preço de Custo (R$)</label>
                    <input 
                        type="number"
                        name="costPrice"
                        onChange={handlePriceCalculation}
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:border-emerald-500 focus:outline-none"
                        placeholder="0.00"
                    />
                </div>
                
                <div className="flex gap-4 items-center">
                    <div className="flex-1">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Margem (%)</label>
                        <input 
                            type="number"
                            name="margin"
                            onChange={handlePriceCalculation}
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:border-emerald-500 focus:outline-none"
                            placeholder="Ex: 50"
                        />
                    </div>
                    <div className="flex-1">
                         <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Lucro Est.</label>
                         <div className="px-3 py-2 bg-emerald-50 text-emerald-700 font-bold rounded-lg border border-emerald-100 text-sm">
                            R$ {formData.salePrice && formData.costPrice ? (formData.salePrice - formData.costPrice).toFixed(2) : '0.00'}
                         </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                    <label className="block text-sm font-bold text-slate-800 mb-1">Preço Final de Venda</label>
                    <input 
                        type="number"
                        name="salePrice"
                        value={formData.salePrice}
                        readOnly
                        className="w-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-lg rounded-lg px-4 py-3 focus:outline-none"
                        placeholder="0.00"
                    />
                </div>
             </div>
          </div>

          {/* Estoque Inicial */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
             <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
               <PackagePlus size={18} className="text-blue-600" /> Estoque Inicial
             </h2>
             
             <div className="space-y-4">
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Quantidade Atual</label>
                    <input 
                        type="number"
                        className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:border-blue-500 focus:outline-none"
                        placeholder="0"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Estoque Mínimo (Alerta)</label>
                    <div className="relative">
                        <input 
                            type="number"
                            className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-800 focus:border-amber-500 focus:outline-none"
                            placeholder="Ex: 10"
                        />
                        <AlertCircle size={16} className="absolute right-3 top-2.5 text-amber-500" />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">
                        O sistema avisará quando o estoque chegar neste nível.
                    </p>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default NewProductPage;