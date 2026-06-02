import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;