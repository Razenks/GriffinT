import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Automation from './pages/AutomationService';
import InfraService from './pages/InfraService';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="home" element={<Main />} />
        <Route path="ai-automation" element={<Automation />} />
        <Route path="infra" element={<InfraService />} />
      </Route>
    </Routes>
  );
}
export default App;