import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute, AdminRoute } from './routes/PrivateRoutes';

import Index from './pages/Index';
import Layout from './Layout';
import Home from './pages/Home';
import Stock from './pages/Stock';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Input from './pages/Input';
import Output from './pages/Output';
import NewProduct from './pages/NewProduct';
import UserManage from './pages/UserManage';
import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Index />} />

      <Route element={<PrivateRoute />}>
        {/* GRUPO 2: Rotas Privadas (Com Sidebar/Menu) */}
        <Route path="/home" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/home/estoque" element={<Stock />} />
          <Route path="/home/relatorios" element={<Reports />} />
          <Route path="/home/config" element={<Settings />} />
          <Route path="/home/entrada" element={< Input />} />
          <Route path="/home/saida" element={< Output />} />
          <Route path="/home/novo-produto" element={< NewProduct />} />


          <Route element={< AdminRoute />}>
            <Route path="/home/gerenciar-usuarios" element={< UserManage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;