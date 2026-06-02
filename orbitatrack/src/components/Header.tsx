import { Link } from 'react-router-dom';

// Componente do Ícone Personalizado: Bolinha Azul Translúcida + icone Prata
const OrbitaIcon = () => (
  <div className="relative flex items-center justify-center h-9 w-9">
    {/*bolinha Azul fundo) */}
    <div className="absolute inset-0 bg-blue-600 rounded-full opacity-40 blur-[1px]"></div>
    <div className="absolute inset-0 border border-blue-500 rounded-full opacity-60"></div>

    {/* SVG do icone em prata */}
    <svg 
      className="relative h-5 w-5 text-slate-200 drop-shadow-[0_1px_3px_rgba(255,255,255,0.3)]" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 22C12 22 20 18 20 12C20 6 15 2 12 2C9 2 4 6 4 12C4 18 12 22 12 22Z" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 2V22M12 2C15 2 20 6 20 12M12 2C9 2 4 6 4 12M20 12C20 18 12 22 12 22M4 12C4 18 12 22 12 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="currentColor"/>
    </svg>
  </div>
);

const Header = () => {
  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Esquerda: Ícone hambúrguer */}
          <div className="flex-1 flex justify-start">
            <button className="text-slate-300 hover:text-white p-2 -ml-2 rounded-md hover:bg-slate-800 transition-colors focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Centro: Logo com o novo Símbolo e Texto Bicolor */}
          <div className="flex-shrink-0 flex justify-center">
            <Link to="/" className="flex items-center gap-3 group">
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
  );
};

export default Header;