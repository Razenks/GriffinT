import React, { useState } from 'react';
import { 
  User, 
  Building, 
  Bell, 
  Shield, 
  Save, 
  Mail, 
  Lock, 
  Upload,
  Users
} from 'lucide-react';

import logo from '../assets/logo.png'; // Usando a logo que você já configurou

function SettingsPage() {
  const [activeTab, setActiveTab] = useState('company');

  // Menu lateral de navegação
  const menuItems = [
    { id: 'company', label: 'Dados da Empresa', icon: <Building size={20} /> },
    { id: 'profile', label: 'Meu Perfil', icon: <User size={20} /> },
    { id: 'users', label: 'Gestão de Usuários', icon: <Users size={20} /> },
    { id: 'notifications', label: 'Notificações', icon: <Bell size={20} /> },
    { id: 'security', label: 'Segurança & Backup', icon: <Shield size={20} /> },
  ];

  return (
    // MUDANÇA: Fundo claro (slate-50) e texto base escuro
    <div className="p-6 bg-slate-50 min-h-screen text-slate-600 font-sans">
      
      {/* Cabeçalho */}
      <div className="mb-8 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-bold text-amber-600 flex items-center gap-2">
          <Shield size={32} /> Configurações
        </h1>
        <p className="text-slate-500 text-sm mt-1">Gerencie as preferências do sistema e dados da organização.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Sidebar de Navegação (Local) */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full text-left p-4 flex items-center gap-3 transition-colors border-l-4 ${
                  activeTab === item.id 
                    ? 'bg-amber-50 border-amber-500 text-amber-700 font-medium' // Ativo: Fundo Amber claro e texto escuro
                    : 'border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-800' // Inativo: Hover sutil
                }`}
              >
                {/* Clone o ícone para aplicar cor condicional se necessário, ou deixe herdar do texto */}
                <span className={activeTab === item.id ? 'text-amber-600' : 'text-slate-400'}>
                    {item.icon}
                </span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Área de Conteúdo */}
        <div className="flex-1">
          
          {/* Aba: DADOS DA EMPRESA */}
          {activeTab === 'company' && (
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm animate-fade-in">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Building className="text-amber-600" /> Informações da Organização
              </h2>
              
              <div className="flex flex-col md:flex-row gap-8 mb-8">
                {/* Upload de Logo */}
                <div className="flex flex-col items-center gap-4">
                  <div className="h-32 w-32 bg-slate-50 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center overflow-hidden relative group cursor-pointer hover:border-amber-400 transition-colors">
                    <img src={logo} alt="Logo Atual" className="h-20 w-20 object-contain opacity-90 group-hover:opacity-50 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Upload className="text-amber-600" />
                    </div>
                  </div>
                  <span className="text-xs text-slate-500">Clique para alterar a logo</span>
                </div>

                {/* Formulario */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nome Fantasia</label>
                    <input type="text" defaultValue="Ludens Store" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">CNPJ</label>
                    <input type="text" defaultValue="00.000.000/0001-91" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none transition-all" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-slate-700">Endereço Completo</label>
                    <input type="text" defaultValue="Av. Paulista, 1000 - São Paulo, SP" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-800 focus:border-amber-500 focus:bg-white focus:outline-none transition-all" />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end pt-4 border-t border-slate-100">
                <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all">
                  <Save size={18} /> Salvar Alterações
                </button>
              </div>
            </div>
          )}

          {/* Aba: NOTIFICAÇÕES */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm animate-fade-in">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Bell className="text-amber-600" /> Preferências de Alerta
              </h2>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div>
                    <h3 className="font-bold text-slate-700">Alerta de Estoque Baixo</h3>
                    <p className="text-sm text-slate-500">Receber e-mail quando um produto atingir o mínimo.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div>
                    <h3 className="font-bold text-slate-700">Resumo Diário de Vendas</h3>
                    <p className="text-sm text-slate-500">Receber um relatório automático todo dia às 22:00.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                  </label>
                </div>
              </div>
            </div>
          )}

           {/* Aba: PERFIL */}
           {activeTab === 'profile' && (
            <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm animate-fade-in">
              <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <User className="text-amber-600" /> Meus Dados
              </h2>
              <div className="grid grid-cols-1 gap-6 max-w-lg">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nome</label>
                    <input type="text" defaultValue="Admin User" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-800 focus:border-amber-500 focus:bg-white outline-none" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">E-mail</label>
                    <input type="email" defaultValue="admin@griffint.com" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-slate-800 focus:border-amber-500 focus:bg-white outline-none" />
                </div>
                <div className="pt-4">
                    <button className="text-amber-600 hover:text-amber-700 text-sm font-medium flex items-center gap-1 transition-colors">
                        <Lock size={14}/> Alterar Senha
                    </button>
                </div>
              </div>
            </div>
          )}

          {/* Placeholders */}
          {(activeTab === 'users' || activeTab === 'security') && (
            <div className="bg-white rounded-xl border border-slate-200 p-12 shadow-sm flex flex-col items-center justify-center text-center opacity-70">
                <Shield size={48} className="text-slate-400 mb-4"/>
                <h3 className="text-xl font-bold text-slate-700">Área Restrita</h3>
                <p className="text-slate-500">Esta configuração requer privilégios elevados.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default SettingsPage;