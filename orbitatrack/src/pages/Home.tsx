import { Link } from 'react-router-dom';
// Importando a imagem da pasta assets
import bgImage from '../assets/cosmos gs.jpg';

const Home = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] flex items-center">
      
      {/*Imagem de Fundo com Filtro Escuro (Overlay) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      {/* Esse gradiente ajuda a mesclar a imagem com o fundo do site na parte de baixo */}
      <div className="absolute inset-0 bg-slate-950/60 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>

      {/*Conteúdo Principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-slate-300 tracking-wider">LIVE MISSION INTEL</span>
        </div>

        {/* Título Principal */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-tight mb-6">
          Toda missão para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">cosmos</span>, rastreada em um só lugar.
        </h1>

        {/* Subtítulo */}
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
          OrbitaTrack centraliza lançamentos, programas e descobertas da NASA, SpaceX, ESA e Roscosmos — centenas de missões ao longo de décadas, tudo em um único painel de controle.
        </p>

        {/* Botões de Ação */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <Link to="/missoes" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
            Explorar Missões
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
          <button className="bg-slate-800/80 hover:bg-slate-700 text-white px-6 py-3 rounded-full font-semibold backdrop-blur-sm border border-slate-700 transition-colors">
            Últimas Notícias
          </button>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl border-t border-slate-800/60 pt-8">
          <div>
            <div className="text-3xl font-bold text-white mb-1">960+</div>
            <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Missões Rastreadas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-1">4</div>
            <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Agências Espaciais</div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-3xl font-bold text-white mb-1">24/7</div>
            <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Monitoramento</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;