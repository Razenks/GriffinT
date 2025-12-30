import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { jwtDecode } from "jwt-decode";
import logo from '../assets/logo.png';

function LoginPage() {
  const navigate = useNavigate();

  // Controle dos inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Controle Interface 
  const [showPassword, setShowPassword] = useState(false); // Esse estado controla se mostra ou não
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // REMOVI A FUNÇÃO "showHidePassword" QUEBRADA DAQUI.
  // A lógica já está direta no botão lá embaixo (onClick).

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Certifique-se que sua API C# está rodando e aceita CORS na porta correta (ex: 7283 HTTPS ou 5094 HTTP)
      // Ajuste a URL abaixo conforme seu backend
      const response = await fetch('http://localhost:5094/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Falha ao autenticar.');
      }

      localStorage.setItem('authToken', data.token);

      const decoded = jwtDecode(data.token);

      const userRole = decoded.Role || decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
      const userName = decoded.Name || decoded.name || decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/name"];
      
      localStorage.setItem('userName', userName);
      localStorage.setItem('userRole', userRole);

      navigate('/home'); 

    } catch (err) {
      console.error(err);
      setError(err.message || "Erro de conexão com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
      <section className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden border-t-4 border-amber-500">

        <div className="p-8 pb-4 text-center">
          <div className="flex justify-center mb-4">
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

        <div className="p-8 pt-2">

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded border border-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Campo: Usuário/Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                E-mail ou Usuário
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                </div>
                <input
                  id="email"
                  type="text"
                  required
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="pl-10 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 focus:outline-none transition-all"
                  placeholder="exemplo@empresa.com"
                  disabled={loading}
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                
                {/* LÓGICA DO INPUT:
                    Se showPassword for true, tipo é "text". Se false, tipo é "password".
                */}
                <input
                  id="password"
                  type={showPassword ? "text" : "password"} 
                  required
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="pl-10 pr-10 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:ring-2 focus:ring-slate-900/20 focus:outline-none transition-all"
                  placeholder="••••••••"
                  disabled={loading}
                />

                {/* BOTÃO DE OLHO */}
                <button
                  type="button"
                  // LÓGICA DO CLIQUE: Inverte o valor atual (true vira false, false vira true)
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                >
                  {/* Ícone muda dependendo se a senha está visível ou não */}
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="#" className="font-medium text-slate-900 hover:text-amber-600 transition-colors">
                  Esqueceu a senha?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white transition-all duration-200 
                ${loading ? 'bg-slate-500 cursor-not-allowed' : 'bg-slate-900 hover:bg-slate-800'}`}
            >
              {loading ? "Entrando..." : "Entrar no Sistema"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-slate-400">
              © {new Date().getFullYear()} GriffinT Soluções. Suporte: (67) 98455-0740
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;