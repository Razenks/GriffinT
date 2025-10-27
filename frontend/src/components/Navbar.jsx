import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

function Navbar() {
  return (
    <header className="bg-brand-blue/70 backdrop-blur-lg sticky top-0 z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div>
          <Link to='/home'><img src={logo} alt="GriffinT Logo" className="h-24" /></Link>
        </div>
        <ul className="hidden md:flex items-center space-x-8 text-lg">
          <Link to="/home"><li className="hover:text-brand-gold transition-colors duration-300">Home</li></Link>
          <Link to="/ai-automation"><li className="opacity-70 hover:opacity-100 hover:text-white transition-all duration-300">Serviços de Automação</li></Link>
          <Link to="/infra"><li className="opacity-70 hover:opacity-100 hover:text-white transition-all duration-300">Serviços de Infraestrutura</li></Link>
        </ul>
        <a
          href="#contato"
          className="bg-brand-gold text-brand-blue font-bold py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}



export default Navbar;