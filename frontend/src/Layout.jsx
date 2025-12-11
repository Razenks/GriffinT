import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import logo from './assets/logo-sem-fundo.png';

function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: 'Visão Geral',
      path: '/home',
      // Este ícone parece ser preenchido (filled), então mantemos simples
      icon: <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
    },
    {
      name: 'Estoque',
      path: '/home/estoque',
      icon: (
        <>
          <path d="M20 7h-9" />
          <path d="M14 17H5" />
          <circle cx="17" cy="17" r="3" />
          <circle cx="7" cy="7" r="3" />
        </>
      )
    },
    {
      name: 'Relatórios',
      path: '/home/relatorios',
      icon: (
        <>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
          <path d="M10 9H8" />
        </>
      )
    },
    {
      name: 'Configurações',
      path: '/home/config',
      icon: (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </>
      )
    }
  ];

  return (
    <div className="flex h-screen bg-slate-100 font-sans">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-slate-900 text-white">
        <div className="h-16 flex items-center justify-center border-b border-slate-800">
          <img
            src={logo}
            alt="Logo GriffinT"
            className="h-24 w-24 mt-5 object-contain rounded-md shadow-md"
          />
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center px-2 py-3 text-sm font-medium rounded-md transition-colors ${isActive
                    ? 'bg-slate-800 text-amber-500'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
              >
                {/* ATUALIZAÇÃO IMPORTANTE NO SVG: 
                   Adicionei strokeWidth, strokeLinecap e strokeLinejoin aqui no pai 
                   para que as linhas dos ícones fiquem arredondadas e visíveis.
                */}
                <svg
                  className={`mr-3 h-5 w-5 ${isActive ? 'text-amber-500' : 'text-slate-400 group-hover:text-white'}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {item.icon}
                </svg>
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center text-slate-900 font-bold">U</div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Usuário</p>
              <p className="text-xs text-slate-400">Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header & Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white shadow-sm h-16 flex items-center justify-between px-4">
          <span className="font-bold text-slate-900">GriffinT</span>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-500 p-2 rounded hover:bg-slate-100">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900 text-white p-2 space-y-1">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-800">
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* Área de Conteúdo */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;