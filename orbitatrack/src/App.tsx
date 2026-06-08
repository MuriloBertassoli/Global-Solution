import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Integrantes from './pages/Integrantes';
import Faq from './pages/Faq';
import Login from './pages/Login'; 
import Missoes from './pages/Missoes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/missoes" element={<Missoes />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;