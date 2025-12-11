import React, { useState } from 'react';
import { Plus, Minus, Trash2, Edit, Package, Search, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

// Dados fictícios para visualização inicial
const initialProducts = [
  { id: 1, name: 'Parafuso Sextavado', category: 'Ferragens', quantity: 1200, minStock: 500, price: 0.25 },
  { id: 2, name: 'Martelo de Borracha', category: 'Ferramentas', quantity: 15, minStock: 10, price: 35.00 },
  { id: 3, name: 'Cimento CP-II', category: 'Materiais', quantity: 40, minStock: 50, price: 28.90 }, // Estoque baixo exemplo
  { id: 4, name: 'Lixadeira Orbital', category: 'Elétricos', quantity: 5, minStock: 8, price: 250.00 },
];

const initialHistory = [
  { id: 1, date: '06/12/2025', product: 'Parafuso Sextavado', type: 'Saída', quantity: 50, user: 'Admin' },
  { id: 2, date: '06/12/2025', product: 'Martelo de Borracha', type: 'Entrada', quantity: 10, user: 'Admin' },
  { id: 3, date: '05/12/2025', product: 'Cimento CP-II', type: 'Saída', quantity: 20, user: 'Vendedor 1' },
];

function StockPage() {
  const [activeTab, setActiveTab] = useState('products'); // 'products' ou 'history'
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica simples para filtrar produtos
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    // MUDANÇA: bg-slate-50 (fundo claro) e texto escuro
    <div className="p-6 bg-slate-50 min-h-screen text-slate-800 font-sans">
      
      {/* Cabeçalho */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-amber-600 flex items-center gap-2">
            <Package size={32} /> Gestão de Estoque
          </h1>
          <p className="text-slate-500 text-sm mt-1">Gerencie entradas, saídas e catálogo de produtos.</p>
        </div>
        
        <div className="flex gap-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Buscar produto..." 
              // Input branco com borda sutil
              className="bg-white border border-slate-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/20 transition-all text-slate-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-slate-400 w-4 h-4" />
          </div>
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 font-medium">
            <Plus size={18} /> Novo Produto
          </button>
        </div>
      </div>

      {/* Cards de Resumo Rápido */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider">Total de Itens</p>
          <div className="flex justify-between items-end mt-2">
            <p className="text-3xl font-bold text-slate-800">{products.reduce((acc, p) => acc + p.quantity, 0)}</p>
            <Package className="text-slate-300" size={24} />
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider">Valor em Estoque</p>
          <div className="flex justify-between items-end mt-2">
            <p className="text-3xl font-bold text-emerald-600">
              R$ {products.reduce((acc, p) => acc + (p.quantity * p.price), 0).toFixed(2)}
            </p>
            <span className="text-emerald-600/60 text-xs font-medium">Estimado</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-500 text-xs uppercase font-semibold tracking-wider">Estoque Baixo</p>
          <div className="flex justify-between items-end mt-2">
            <p className="text-3xl font-bold text-red-600">
              {products.filter(p => p.quantity < p.minStock).length} <span className="text-lg text-slate-400 font-normal">itens</span>
            </p>
            <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Navegação por Abas */}
      <div className="flex gap-6 border-b border-slate-200 mb-6">
        <button 
          onClick={() => setActiveTab('products')}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            activeTab === 'products' ? 'text-amber-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Produtos em Estoque
          {activeTab === 'products' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-t-full"></span>}
        </button>
        <button 
          onClick={() => setActiveTab('history')}
          className={`pb-3 px-1 text-sm font-medium transition-colors relative ${
            activeTab === 'history' ? 'text-amber-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          Histórico de Movimentações
          {activeTab === 'history' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-t-full"></span>}
        </button>
      </div>

      {/* Conteúdo da Tabela */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        
        {activeTab === 'products' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-100">
                  <th className="p-4 font-semibold">Produto</th>
                  <th className="p-4 font-semibold">Categoria</th>
                  <th className="p-4 font-semibold text-right">Preço Un.</th>
                  <th className="p-4 font-semibold text-center">Status</th>
                  <th className="p-4 font-semibold text-center">Ações Rápidas</th>
                  <th className="p-4 font-semibold text-center">Opções</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="p-4 font-medium text-slate-700">{product.name}</td>
                    <td className="p-4 text-slate-500 text-sm">{product.category}</td>
                    <td className="p-4 text-slate-600 text-right">R$ {product.price.toFixed(2)}</td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col items-center">
                        <span className={`text-sm font-bold ${product.quantity < product.minStock ? 'text-red-600' : 'text-slate-700'}`}>
                          {product.quantity} un
                        </span>
                        {product.quantity < product.minStock && (
                          <span className="text-[10px] bg-red-50 text-red-600 border border-red-100 px-2 py-0.5 rounded-full mt-1 font-medium">Repor</span>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center items-center gap-2">
                         {/* Botão Saída Rápida - Light */}
                        <button className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-red-50 hover:text-red-600 hover:border-red-200 text-slate-500 transition-all" title="Registrar Saída">
                          <Minus size={16} />
                        </button>
                        {/* Botão Entrada Rápida - Light */}
                        <button className="p-1.5 rounded-lg bg-slate-100 border border-slate-200 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 text-slate-500 transition-all" title="Registrar Entrada">
                          <Plus size={16} />
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex justify-center items-center gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
                        <button className="text-slate-400 hover:text-amber-600 transition-colors" title="Editar Produto">
                          <Edit size={18} />
                        </button>
                        <button className="text-slate-400 hover:text-red-600 transition-colors" title="Remover Produto">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Tabela de Histórico - Light */
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider border-b border-slate-100">
                  <th className="p-4 font-semibold">Data</th>
                  <th className="p-4 font-semibold">Produto</th>
                  <th className="p-4 font-semibold text-center">Tipo</th>
                  <th className="p-4 font-semibold text-center">Quantidade</th>
                  <th className="p-4 font-semibold text-right">Usuário</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {initialHistory.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 text-slate-500 text-sm">{item.date}</td>
                    <td className="p-4 font-medium text-slate-700">{item.product}</td>
                    <td className="p-4 text-center">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                        item.type === 'Entrada' 
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-100' 
                          : 'bg-red-50 text-red-700 border-red-100'
                      }`}>
                        {item.type === 'Entrada' ? <ArrowDownLeft size={12}/> : <ArrowUpRight size={12}/>}
                        {item.type}
                      </span>
                    </td>
                    <td className="p-4 text-center text-slate-700 font-bold">{item.quantity}</td>
                    <td className="p-4 text-right text-slate-500 text-sm">{item.user}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Estado Vazio */}
        {filteredProducts.length === 0 && activeTab === 'products' && (
           <div className="p-8 text-center text-slate-400">
              <Package size={48} className="mx-auto mb-3 opacity-20"/>
              <p>Nenhum produto encontrado.</p>
           </div>
        )}
      </div>
    </div>
  );
}

export default StockPage;