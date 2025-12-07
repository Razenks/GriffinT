import React, { useState } from 'react';
import logo from '../assets/logo.png';

function LoginPage() {
  // Estado para controlar a visibilidade da senha (UX essencial para evitar erros de digitação)
  const [showPassword, setShowPassword] = useState(false);

  // Função simulada de submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login disparado");
    // Lógica de autenticação viria aqui
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <section className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-amber-500">

        {/* --- Cabeçalho do Card --- */}
        <div className="p-8 pb-4 text-center">
          <div className="flex justify-center mb-4">
            {/* Placeholder para a Logo - Substitua pelo <img src="..." /> real */}
            <div className="h-16 w-16 bg-slate-900 rounded-full flex items-center justify-center text-amber-500 shadow-md">
              <img
                src={logo}
                alt="Logo GriffinT"
                className="h-16 w-16 object-contain rounded-full shadow-md"
              />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Bem-vindo de volta
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Acesse o painel de controle GriffinT
          </p>
        </div>

        {/* --- Formulário --- */}
        <div className="p-8 pt-2">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Campo: Usuário/Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                E-mail ou Usuário
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  {/* Ícone User */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <input
                  id="email"
                  type="text"
                  required
                  className="pl-10 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 focus:outline-none transition-all"
                  placeholder="exemplo@empresa.com"
                />
              </div>
            </div>

            {/* Campo: Senha */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                  Senha
                </label>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  {/* Ícone Lock */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="pl-10 pr-10 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 focus:outline-none transition-all"
                  placeholder="••••••••"
                />
                {/* Botão Mostrar/Ocultar Senha */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  )}
                </button>
              </div>
            </div>

            {/* Checkbox e Recuperação */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900 cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-600 cursor-pointer select-none">
                  Lembrar de mim
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-slate-900 hover:text-amber-600 transition-colors">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            {/* Botão de Ação */}
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all duration-200"
            >
              Entrar no Sistema
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} GriffinT Soluções. Suporte: (XX) XXXX-XXXX
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;