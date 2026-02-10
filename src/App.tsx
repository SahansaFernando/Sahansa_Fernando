import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { KuddlesPage } from './pages/Kuddles';
import { EstatePage } from './pages/Estate';
import { VirtualRealityPage } from './pages/VirtualReality';
import { NextGenPage } from './pages/NextGen';
import { EcoRangePage } from './pages/EcoRange';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/kuddles" element={<KuddlesPage />} />
      <Route path="/projects/estate" element={<EstatePage />} />
      <Route path="/projects/virtual-reality" element={<VirtualRealityPage />} />
      <Route path="/projects/next-gen" element={<NextGenPage />} />
      <Route path="/projects/eco-range" element={<EcoRangePage />} />
    </Routes>
  );
}
