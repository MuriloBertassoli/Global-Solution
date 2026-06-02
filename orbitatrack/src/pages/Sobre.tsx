// Ícones em SVG personalizados 
const TargetIcon = () => (
  <svg className="w-8 h-8 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const TechIcon = () => (
  <svg className="w-8 h-8 text-indigo-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
  </svg>
);

const OdsIcon = () => (
  <svg className="w-8 h-8 text-emerald-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9 3 9m-9-9h18" />
  </svg>
);

const Sobre = () => {
  return (
    <div className="w-full bg-slate-950 text-slate-200">
      
      {/* 1. SEÇÃO BANNER INICIAL */}
      <section className="relative bg-slate-950 border-b border-slate-800/50 py-20 md:py-28 overflow-hidden">
        {/* Detalhe de luz de fundo azul  */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold text-blue-500 tracking-[0.3em] uppercase mb-4 block">GLOBAL SOLUTION 2026/1</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Decodificando a Nova Fronteira Econômica
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A OrbitaTrack nasceu com o propósito de responder ao desafio proposto pela FIAP: conectar a infraestrutura do ecossistema espacial com soluções tangíveis, inteligentes e aplicáveis aqui na Terra.
          </p>
        </div>
      </section>

      {/* 2. OS TRÊS PILARES CORPORATIVOS */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card O Propósito */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/80 backdrop-blur-sm hover:border-blue-500/30 transition-all group">
            <TargetIcon />
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">O Propósito</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Centralizar informações cruciais sobre lançamentos e explorações espaciais que hoje encontram-se fragmentadas em múltiplos portais globais. Reunimos o passado, o presente e o planejamento futuro da humanidade no cosmos em uma única base unificada.
            </p>
          </div>

          {/* Card A Engenharia */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/80 backdrop-blur-sm hover:border-indigo-500/30 transition-all group">
            <TechIcon />
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">A Engenharia</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Construído sobre pilares de arquitetura modular, o sistema utiliza inteligência preditiva alimentada por Machine Learning (datasets do Kaggle) para calcular probabilidades de sucesso e agrupar missões, distribuindo os dados via API robusta em Java para o nosso front-end responsivo em React.
            </p>
          </div>

          {/* Card O Alinhamento ODS */}
          <div className="bg-slate-900/40 p-8 rounded-2xl border border-slate-800/80 backdrop-blur-sm hover:border-emerald-500/30 transition-all group">
            <OdsIcon />
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">Impacto Global</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              A economia espacial não visa apenas o espaço externo, mas sim a preservação, inovação e sustentabilidade do nosso próprio planeta. Nossos dados fornecem inteligência analítica estratégica correlacionada diretamente com as metas globais da ONU.
            </p>
          </div>

        </div>
      </section>

      {/* 3. ALINHAMENTO COM OS ODS DA ONU */}
      <section className="bg-slate-900/40 border-y border-slate-800/40 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white tracking-tight text-center mb-4">Compromisso com o Desenvolvimento Sustentável</h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12 text-sm">
            Nossa plataforma de dados espaciais atua diretamente como suporte tecnológico e analítico para os seguintes Objetivos de Desenvolvimento Sustentável:
          </p>
          
          <div className="space-y-4">
            {[
              { num: 'ODS 9', ttl: 'Indústria, Inovação e Infraestrutura', desc: 'Fomento à pesquisa científica, modernização tecnológica das indústrias e infraestrutura de coleta de dados orbitais de larga escala.' },
              { num: 'ODS 11', ttl: 'Cidades e Comunidades Sustentáveis', desc: 'Centralização de dados de satélites climáticos que mitigam desastres naturais e protegem comunidades de vulnerabilidade ambiental.' },
              { num: 'ODS 13', ttl: 'Ação Contra a Mudança Global do Clima', desc: 'Monitoramento contínuo de emissões de carbono, desmatamento e alterações de biomas críticos através do histórico de satélites monitorados.' },
              { num: 'ODS 2', ttl: 'Fome Zero e Agricultura Sustentável', desc: 'Cruzamento preditivo de informações de monitoramento de lavouras e produtividade do agronegócio de precisão baseado em sensoriamento remoto.' }
            ].map((ods) => (
              <div key={ods.num} className="flex flex-col sm:flex-row gap-4 p-5 rounded-xl bg-slate-950/50 border border-slate-800/60 items-start">
                <span className="bg-blue-950 text-blue-400 border border-blue-800 px-3 py-1 rounded text-xs font-bold font-mono uppercase tracking-wider flex-shrink-0">
                  {ods.num}
                </span>
                <div>
                  <h4 className="font-bold text-white text-base mb-1">{ods.ttl}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{ods.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Sobre;