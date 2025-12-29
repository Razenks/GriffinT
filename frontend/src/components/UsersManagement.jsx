import React, { useState } from 'react';
import api from '../services/api';
import { 
  Users, 
  Building2, 
  Plus, 
  Search, 
  MoreVertical, 
  Shield, 
  Mail, 
  Briefcase,
  CheckCircle2,
  XCircle
} from 'lucide-react';

function UsersManagement() {
  // Estado para controlar qual aba está ativa: 'employees' ou 'tenants'
  const [activeTab, setActiveTab] = useState('employees');

  // Função para buscar no banco
  useEffect(() => {
    async function fetchUsers() {
      if (activeTab === 'employees') {
        try {
          const response = await api.get('/users');
          setEmployees(response.data);
          setLoading(false);
        } catch (error) {
          console.error("Erro ao buscar usuários", error);
          alert("Erro ao carregar usuários. Verifique se você está logado.")
          setLoading(false);
        }
      }
    }
    fetchUsers();
  }), [activeTab];

  // DADOS FICTÍCIOS - EMPRESAS (Simulando o que só o Super Admin veria)
  const mockTenants = [
    { id: 1, name: 'Padaria do João', owner: 'joao@padaria.com', plan: 'Premium', status: 'Ativo' },
    { id: 2, name: 'Mercadinho Feliz', owner: 'ana@mercadinho.com', plan: 'Básico', status: 'Bloqueado' },
    { id: 3, name: 'Tech Solutions', owner: 'carlos@tech.com', plan: 'Enterprise', status: 'Ativo' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen font-sans">
      
      {/* Cabeçalho */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-amber-600 flex items-center gap-2">
            <Users size={32} /> Gestão de Acessos
          </h1>
          <p className="text-slate-600">Gerencie sua equipe e configurações de conta.</p>
        </div>
        
        {/* Botão de Ação Principal (Muda dinamicamente) */}
        <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 transition-colors shadow-sm">
          <Plus size={20} />
          {activeTab === 'employees' ? 'Novo Funcionário' : 'Nova Empresa'}
        </button>
      </div>

      {/* SELETOR DE ABAS (TABS) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {/* Card Aba: Minha Equipe */}
        <button 
          onClick={() => setActiveTab('employees')}
          className={`p-4 rounded-xl border flex items-center gap-4 transition-all text-left ${
            activeTab === 'employees' 
              ? 'bg-white border-amber-500 ring-1 ring-amber-500 shadow-md' 
              : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
          }`}
        >
          <div className={`p-3 rounded-full ${activeTab === 'employees' ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-400'}`}>
            <Users size={24} />
          </div>
          <div>
            <h3 className={`font-bold ${activeTab === 'employees' ? 'text-slate-800' : 'text-slate-600'}`}>Minha Equipe</h3>
            <p className="text-sm text-slate-500">Gerenciar vendedores e gerentes</p>
          </div>
        </button>

        {/* Card Aba: Empresas (Visão Super Admin) */}
        <button 
          onClick={() => setActiveTab('tenants')}
          className={`p-4 rounded-xl border flex items-center gap-4 transition-all text-left ${
            activeTab === 'tenants' 
              ? 'bg-white border-blue-500 ring-1 ring-blue-500 shadow-md' 
              : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
          }`}
        >
          <div className={`p-3 rounded-full ${activeTab === 'tenants' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
            <Building2 size={24} />
          </div>
          <div>
            <h3 className={`font-bold ${activeTab === 'tenants' ? 'text-slate-800' : 'text-slate-600'}`}>Empresas (Tenants)</h3>
            <p className="text-sm text-slate-500">Administrar clientes e planos</p>
          </div>
        </button>
      </div>

      {/* Barra de Filtros e Pesquisa */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
          <input 
            type="text" 
            placeholder={activeTab === 'employees' ? "Buscar funcionário por nome ou email..." : "Buscar empresa..."}
            className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-slate-700"
          />
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 font-medium text-sm">
             Filtros
           </button>
        </div>
      </div>

      {/* ÁREA DE CONTEÚDO (Muda conforme a aba) */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        
        {/* TABELA DE FUNCIONÁRIOS */}
        {activeTab === 'employees' && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Nome</th>
                  <th className="px-6 py-4">Função (Role)</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockEmployees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                          {emp.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{emp.name}</p>
                          <p className="text-slate-500 text-xs flex items-center gap-1"><Mail size={12}/> {emp.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                        <Shield size={12} /> {emp.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        emp.status === 'Ativo' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                      }`}>
                        {emp.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-amber-600 transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TABELA DE EMPRESAS (TENANTS) */}
        {activeTab === 'tenants' && (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">Empresa</th>
                  <th className="px-6 py-4">Plano</th>
                  <th className="px-6 py-4">Dono</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mockTenants.map((tenant) => (
                  <tr key={tenant.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                          <Building2 size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">{tenant.name}</p>
                          <p className="text-slate-500 text-xs">ID: {tenant.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                       <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                        <Briefcase size={12} /> {tenant.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">
                      {tenant.owner}
                    </td>
                    <td className="px-6 py-4">
                      {tenant.status === 'Ativo' ? (
                        <span className="flex items-center gap-1 text-emerald-600 text-xs font-bold">
                          <CheckCircle2 size={14} /> Ativo
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-red-600 text-xs font-bold">
                          <XCircle size={14} /> Bloqueado
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-blue-600 transition-colors">
                        <MoreVertical size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}

export default UsersManagement;