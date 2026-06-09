import { Link } from 'react-router-dom';
import bgImage from '../assets/cosmos gs.jpg';

const Home = () => {
  // Array com os dados das agências para gerar os botões com logos
  const agencias = [
    { name: 'NASA', logo: '/logos/nasa.jpg' },
    { name: 'SpaceX', logo: '/logos/spacex.png' },
    { name: 'ESA', logo: '/logos/esa.jpg' },
    { name: 'Roscosmos', logo: '/logos/roscosmos.png' }
  ];

  return (
    <div className="flex flex-col w-full bg-slate-950 text-slate-200">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[calc(100vh-4rem)] flex items-center overflow-hidden border-b border-slate-800/50">
        
        {/*Imagem de fundo com overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-subtle-zoom"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>
        <div className="absolute inset-0 bg-slate-950/70 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

        {/* Conteúdo Principal */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 md:py-32">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-xs font-semibold text-blue-200 tracking-wider">LIVE MISSION INTEL</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-tight mb-6">
            Toda missão para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">cosmos</span>, rastreada em um só lugar.
          </h1>

          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
            O Cosmohub centraliza lançamentos, programas e descobertas da NASA, SpaceX, ESA e Roscosmos — centenas de missões ao longo de décadas, tudo em um único painel de controle.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link to="/missoes" className="bg-blue-600 hover:bg-blue-500 text-white px-7 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 group shadow-lg shadow-blue-600/20">
              Explorar Missões
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            
            <button 
              onClick={() => alert("🚀 Módulo de Notícias em Tempo Real entrará no ar na Fase 2 do Cosmohub! Fique ligado.")}
              className="bg-slate-800/80 hover:bg-slate-700 text-white px-7 py-3.5 rounded-full font-semibold backdrop-blur-sm border border-slate-700 transition-colors cursor-pointer"
            >
              Últimas Notícias
            </button>
          </div>

          {/* Estatísticas (Cards inferiores) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl border-t border-slate-800/60 pt-10">
            <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 backdrop-blur-sm">
              <div className="text-4xl font-bold text-white mb-1">960+</div>
              <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Missões Rastreadas</div>
            </div>
            <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 backdrop-blur-sm">
              <div className="text-4xl font-bold text-white mb-1">4</div>
              <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Agências Espaciais</div>
            </div>
            <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 backdrop-blur-sm col-span-2 md:col-span-1">
              <div className="text-4xl font-bold text-white mb-1">24/7</div>
              <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Monitoramento Digital</div>
            </div>
             <div className="bg-slate-900/50 p-5 rounded-xl border border-slate-800 backdrop-blur-sm col-span-2 md:col-span-1">
              <div className="text-4xl font-bold text-blue-400 mb-1">IA</div>
              <div className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Análise Preditiva</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SEÇÃO AGÊNCIAS */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 tracking-widest uppercase mb-12">
            EXPLORE POR OPERADOR PRINCIPAL
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {agencias.map(agencia => (
              <Link 
                key={agencia.name} 
                to={`/missoes?agencia=${agencia.name}`}
                className="flex flex-col items-center group transition-all hover:-translate-y-2"
              >
                {/* Círculo do logo */}
                <div className="w-24 h-24 mb-4 rounded-full bg-slate-900/80 border-2 border-slate-800 group-hover:border-blue-500 flex items-center justify-center overflow-hidden shadow-lg transition-colors p-4">
                  <img 
                    src={agencia.logo} 
                    alt={`Logo ${agencia.name}`} 
                    className="w-full h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
                <span className="text-lg font-bold text-slate-400 group-hover:text-blue-400 transition-colors">
                  {agencia.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Secao como funciona e funcões */}
      <section className="py-24 md:py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Uma plataforma inteligente para a Economia Espacial.
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              O Cosmohub não apenas lista missões, ele utiliza Inteligência Artificial para analisar dados históricos do Kaggle, prevendo taxas de sucesso e agrupando lançamentos por perfil tecnológico. Centralize seu conhecimento e explore o cosmos com dados concretos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {ttl: 'Rastreamento Centralizado', desc: 'Acesse NASA, SpaceX e mais em um único painel.'},
                {ttl: 'Análise Preditiva (IA)', desc: 'Modelos de ML preveem chances de sucesso da missão.'},
                {ttl: 'Dados Históricos Reais', desc: 'Populados via Datasets do Kaggle para precisão.'},
                {ttl: 'Favoritos Pessoais', desc: 'Crie sua própria coleção de missões notáveis.'},
              ].map(item => (
                <div key={item.ttl} className="flex gap-3">
                  <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <div>
                    <h4 className="font-semibold text-white">{item.ttl}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simulando a imagem*/}
          <div className="bg-slate-950 p-4 rounded-2xl border border-slate-700 shadow-2xl shadow-blue-950/30">
            <img 
              src={bgImage} 
              alt="Interface Analítica" 
              className="rounded-xl object-cover h-96 w-full opacity-60 blend-luminosity"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;