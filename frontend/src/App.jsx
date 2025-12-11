import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Layout from './Layout';
import Home from './pages/Home';
import Stock from './pages/Stock';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

// Se você tiver um arquivo CSS global extra, importe aqui também
import './index.css'; 

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Index />} />

      {/* GRUPO 2: Rotas Privadas (Com Sidebar/Menu) */}
      <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home/estoque" element={<Stock />} />
          <Route path="/home/relatorios" element={<Reports />} />
          <Route path="/home/config" element={<Settings />} />


      </Route>
    </Routes>
  );
}

export default App;