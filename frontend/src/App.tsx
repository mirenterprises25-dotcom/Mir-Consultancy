import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// Import pages (we will create these shortly)
import Home from './pages/Home';
import IndustryDetail from './pages/IndustryDetail';
import CapabilityDetail from './pages/CapabilityDetail';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import StaticPage from './pages/StaticPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="industries/:slug" element={<IndustryDetail />} />
          <Route path="capabilities/:slug" element={<CapabilityDetail />} />
          <Route path="insights" element={<Insights />} />
          <Route path="insights/:slug" element={<InsightDetail />} />
          <Route path="about/:slug" element={<StaticPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
