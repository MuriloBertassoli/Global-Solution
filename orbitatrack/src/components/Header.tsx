import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// 🚀 Componente do Ícone Personalizado
const OrbitaIcon = () => (
  <div className="relative flex items-center justify-center h-9 w-9">
    <div className="absolute inset-0 bg-blue-600 rounded-full opacity-40 blur-[1px]"></div>
    <div className="absolute inset-0 border border-blue-500 rounded-full opacity-60"></div>
    <svg className="relative h-5 w-5 text-slate-200 drop-shadow-[0_1px_3px_rgba(255,255,255,0.3)]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C12 22 20 18 20 12C20 6 15 2 12 2C9 2 4 6 4 12C4 18 12 22 12 22Z" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 2V22M12 2C15 2 20 6 20 12M12 2C9 2 4 6 4 12M20 12C20 18 12 22 12 22M4 12C4 18 12 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
    </svg>
  </div>
);

const Header = () => {
  // Estado para controlar se o menu está aberto ou fechado
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Efeito para travar o scroll da página quando o menu abrir
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function para garantir que o scroll destrave se o componente sumir
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSidebarOpen]);

  // Função para fechar o menu ao clicar em um link
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Esquerda: Ícone hambúrguer que abre o menu */}
            <div className="flex-1 flex justify-start">
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="text-slate-300 hover:text-white p-2 -ml-2 rounded-md hover:bg-slate-800 transition-colors focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Centro: Logo */}
            <div className="flex-shrink-0 flex justify-center">
              <Link to="/" className="flex items-center gap-3 group" onClick={closeSidebar}>
                <OrbitaIcon />
                <div className="text-xl font-bold tracking-wide group-hover:opacity-80 transition-opacity">
                  <span className="text-white">Orbita</span>
                  <span className="text-blue-500">Track</span>
                </div>
              </Link>
            </div>

            {/* Direita: Botão ação */}
            <div className="flex-1 flex justify-end">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-xs font-semibold transition-colors tracking-wide">
                ENTRAR
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* SIDEBAR (MENU LATERAL) */}
      
      {/* Fundo escuro (Overlay) que aparece atrás do menu */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 transition-opacity"
          onClick={closeSidebar}
        ></div>
      )}

      {/* O Menu em si */}
      <div 
        className={`fixed top-0 left-0 h-full w-72 bg-[#0a0f1c] border-r border-slate-800 z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Cabeçalho do Menu */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-slate-800/50">
          <span className="text-xs font-bold text-slate-400 tracking-[0.2em] uppercase">Navegação</span>
          <button onClick={closeSidebar} className="text-slate-400 hover:text-white p-1">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Lista de Links (Scrollable) */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-8">
          
          {/* Seção 1: Páginas obrigatórias FIAP */}
          <div>
            <ul className="space-y-1">
              <li>
                <Link to="/" onClick={closeSidebar} className="flex items-center gap-4 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  <span className="text-sm font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/sobre" onClick={closeSidebar} className="flex items-center gap-4 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm font-medium">Sobre o Projeto</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" onClick={closeSidebar} className="flex items-center gap-4 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span className="text-sm font-medium">FAQ</span>
                </Link>
              </li>
              <li>
                <Link to="/integrantes" onClick={closeSidebar} className="flex items-center gap-4 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  <span className="text-sm font-medium">Equipe</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Seção 2: Aplicação e solução */}
          <div>
            <div className="px-3 mb-2">
              <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">Explorar</span>
            </div>
            <ul className="space-y-1">
              <li>
                <Link to="/missoes" onClick={closeSidebar} className="flex items-center gap-4 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                  <span className="text-sm font-medium">Todas as Missões</span>
                </Link>
              </li>
              <li>
                <a href="#" className="flex items-center gap-4 px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                  <span className="text-sm font-medium">Últimas Notícias</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Seção 3: Agências */}
          <div>
            <div className="px-3 mb-2">
              <span className="text-[10px] font-bold text-slate-500 tracking-[0.2em] uppercase">Agências</span>
            </div>
            <ul className="space-y-1">
              {[
                { name: 'NASA', color: 'bg-red-500' },
                { name: 'SpaceX', color: 'bg-slate-200' },
                { name: 'ESA', color: 'bg-blue-500' },
                { name: 'Roscosmos', color: 'bg-orange-500' }
              ].map(agencia => (
                <li key={agencia.name}>
                  <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${agencia.color}`}></span>
                      <svg className="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                    </div>
                    <span className="text-sm font-medium">{agencia.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </>
  );
};

export default Header;