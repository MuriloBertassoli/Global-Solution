import { useParams, Link } from 'react-router-dom';

// Mock Data Completo e Expandido
const MISSOES_MOCK = [
  { 
    id: 1, 
    nome: "Artemis I", 
    agencia: "NASA", 
    status: "Sucesso", 
    data: "2022-11-16", 
    foguete: "SLS Block 1", 
    chance: 100, 
    descricao: "Missão pioneira e não tripulada do programa Artemis. O objetivo principal foi testar a segurança e a integridade da cápsula Orion em uma órbita retrógrada distante ao redor da Lua, validando os sistemas de suporte à vida e o escudo térmico para futuras missões tripuladas.",
    imgPrincipal: "/fotos-missoes/artemis1,1.png", 
    imgDetalheA: "/fotos-missoes/artemis1,2.jpg",  
    imgDetalheB: "/fotos-missoes/artemis1,3.jpg"   
  },
  { 
    id: 2, 
    nome: "Starlink G6-4", 
    agencia: "SpaceX", 
    status: "Sucesso", 
    data: "2024-03-15", 
    foguete: "Falcon 9", 
    chance: 98, 
    descricao: "Lançamento comercial dedicado à expansão da constelação de satélites Starlink de segunda geração (V2 Mini). A missão inseriu com sucesso 23 satélites em órbita terrestre baixa (LEO), reforçando a infraestrutura de internet global de alta velocidade e baixa latência.",
    imgPrincipal: "/fotos-missoes/starlink,3.jpg",
    imgDetalheA: "/fotos-missoes/starlink,2.jpg",
    imgDetalheB: "/fotos-missoes/starlink,1.jpg"
  },
  { 
    id: 3, 
    nome: "Luna 25", 
    agencia: "Roscosmos", 
    status: "Falha", 
    data: "2023-08-11", 
    foguete: "Soyuz-2.1b", 
    chance: 45, 
    descricao: "Primeira tentativa russa de pouso lunar em quase 50 anos, com destino ao polo sul do satélite. Devido a uma falha na temporização do motor durante a manobra de pré-pouso, a sonda operou por mais tempo do que o previsto, resultando em uma colisão catastrófica com a superfície lunar.",
    imgPrincipal: "/fotos-missoes/luna25,1.jpg",
    imgDetalheA: "/fotos-missoes/luna25,2.jpg",
    imgDetalheB: "/fotos-missoes/luna25,3.jpg"
  },
  { 
    id: 4, 
    nome: "Juice", 
    agencia: "ESA", 
    status: "Em curso", 
    data: "2023-04-14", 
    foguete: "Ariane 5", 
    chance: 92, 
    descricao: "A missão JUpiter ICy moons Explorer (JUICE) iniciou sua longa jornada em direção ao sistema joviano. O objetivo é realizar observações detalhadas de Júpiter e de suas três grandes luas oceânicas (Ganímedes, Calisto e Europa), investigando potenciais habitats habitáveis e água líquida subsuperficial.",
    imgPrincipal:"/fotos-missoes/juice,1.jpg",
    imgDetalheA: "/fotos-missoes/juice,2.jpg",
    imgDetalheB: "/fotos-missoes/juice,3.jpg"
  },
  { 
    id: 5, 
    nome: "Crew-8", 
    agencia: "SpaceX", 
    status: "Sucesso", 
    data: "2024-03-04", 
    foguete: "Falcon 9", 
    chance: 99, 
    descricao: "Oitava missão de rotação de tripulação operacional realizada em parceria com o Commercial Crew Program da NASA. A cápsula Dragon Endeavour transportou com segurança quatro astronautas para uma estadia de seis meses na Estação Espacial Internacional (ISS) para a condução de experimentos científicos avançados.",
    imgPrincipal: "/fotos-missoes/crew8,1.jpg",
    imgDetalheA: "/fotos-missoes/crew8,2.jpg",
    imgDetalheB: "/fotos-missoes/crew8,3.jpg"
  },
  { 
    id: 6, 
    nome: "Psyche", 
    agencia: "NASA", 
    status: "Em curso", 
    data: "2023-10-13", 
    foguete: "Falcon Heavy", 
    chance: 88, 
    descricao: "Jornada científica com destino ao asteroide metálico único chamado 16 Psyche, localizado no cinturão principal entre Marte e Júpiter. Cientistas acreditam que o asteroide seja o núcleo exposto de um antigo protoplaneta, o que pode revelar os segredos sobre a formação do núcleo da Terra.",
    imgPrincipal: "/fotos-missoes/psyche,1.jpg",
    imgDetalheA: "/fotos-missoes/psyche,2.jpg",
    imgDetalheB: "/fotos-missoes/psyche,3.jpg"
  },
  { 
    id: 7, 
    nome: "Perseverance", 
    agencia: "NASA", 
    status: "Sucesso", 
    data: "2020-07-30", 
    foguete: "Atlas V", 
    chance: 95, 
    descricao: "Lançamento do rover Perseverance com destino à Cratera Jezero, em Marte. A missão principal é a astrobiologia, buscando sinais de vida microbiana antiga, caracterizando o clima e a geologia do planeta vermelho, além de coletar e armazenar as primeiras amostras de rochas para um futuro retorno à Terra.",
    imgPrincipal: "/fotos-missoes/perseverance,1.jpg",
    imgDetalheA: "/fotos-missoes/perseverance,2.jpg",
    imgDetalheB: "/fotos-missoes/perseverance,3.jpg"
  },
  { 
    id: 8, 
    nome: "Starship IFT-3", 
    agencia: "SpaceX", 
    status: "Parcial", 
    data: "2024-03-14", 
    foguete: "Starship", 
    chance: 60, 
    descricao: "Terceiro teste de voo orbital integrado do veículo superpesado Starship. A missão alcançou grandes marcos históricos, incluindo a inserção orbital completa e a abertura das portas de carga no espaço, mas o propulsor e a nave foram perdidos durante as fases finais de reentrada na atmosfera.",
    imgPrincipal: "/fotos-missoes/starship,1.jpg",
    imgDetalheA: "/fotos-missoes/starship,2.jpg",
    imgDetalheB: "/fotos-missoes/starship,3.jpg"
  },
  { 
    id: 9, 
    nome: "Euclid", 
    agencia: "ESA", 
    status: "Sucesso", 
    data: "2023-07-01", 
    foguete: "Falcon 9", 
    chance: 94, 
    descricao: "Telescópio espacial projetado para mapear a geometria do universo escuro. A missão está criando o maior e mais preciso mapa 3D do cosmos já feito, investigando a evolução das galáxias ao longo de 10 bilhões de anos para compreender a natureza da Matéria Escura e da Energia Escura.",
    imgPrincipal: "/fotos-missoes/euclid,2.png",
    imgDetalheA: "/fotos-missoes/euclid,1.jpg",
    imgDetalheB: "/fotos-missoes/euclid,3.jpg"
  },
  { 
    id: 10, 
    nome: "Soyuz MS-24", 
    agencia: "Roscosmos", 
    status: "Sucesso", 
    data: "2023-09-15", 
    foguete: "Soyuz-2.1a", 
    chance: 97, 
    descricao: "Missão tripulada russa que transportou cosmonautas e astronautas de forma bem-sucedida para a Estação Espacial Internacional. A espaçonave funcionou também como veículo de resgate de emergência acoplado à ISS durante o período da expedição científica.",
    imgPrincipal: "/fotos-missoes/soyuz,1.jpg",
    imgDetalheA: "/fotos-missoes/soyuz,2.jpg",
    imgDetalheB: "/fotos-missoes/soyuz,3.jpg"
  },
  { 
    id: 11, 
    nome: "James Webb", 
    agencia: "NASA", 
    status: "Sucesso", 
    data: "2021-12-25", 
    foguete: "Ariane 5", 
    chance: 91, 
    descricao: "Lançamento do maior e mais poderoso telescópio espacial de infravermelho da história da humanidade. Posicionado no ponto de Lagrange L2, o James Webb está redefinindo a astronomia ao capturar as primeiras galáxias formadas após o Big Bang e analisar a atmosfera de exoplanetas distantes.",
    imgPrincipal: "/fotos-missoes/webb,1.jpg",
    imgDetalheA: "/fotos-missoes/webb,2.jpg",
    imgDetalheB: "/fotos-missoes/webb,3.jpg"
  },
  { 
    id: 12, 
    nome: "Rosetta", 
    agencia: "ESA", 
    status: "Sucesso", 
    data: "2004-03-02", 
    foguete: "Ariane 5G+", 
    chance: 85, 
    descricao: "Missão histórica que viajou pelo sistema solar por uma década até se tornar a primeira espaçonave a orbitar e pousar um módulo (Philae) na superfície de um cometa em movimento (67P/Churyumov-Gerasimenko), desvendando dados cruciais sobre a água e compostos orgânicos no início do sistema solar.",
    imgPrincipal: "/fotos-missoes/rosetta,1.jpg",
    imgDetalheA: "/fotos-missoes/rosetta,2.jpg",
    imgDetalheB: "/fotos-missoes/rosetta,3.jpg"
  },
  { 
    id: 13, 
    nome: "Inspiration4", 
    agencia: "SpaceX", 
    status: "Sucesso", 
    data: "2021-09-16", 
    foguete: "Falcon 9", 
    chance: 96, 
    descricao: "A primeira missão espacial do mundo composta exclusivamente por cidadãos civis particulares, sem astronautas profissionais a bordo. A tripulação passou três dias em órbita terrestre a uma altitude superior à da ISS, conduzindo experimentos médicos e arrecadando fundos para pesquisas hospitalares.",
    imgPrincipal: "/fotos-missoes/inspiration,1.jpg",
    imgDetalheA: "/fotos-missoes/inspiration,2.jpg",
    imgDetalheB: "/fotos-missoes/inspiration,3.jpg"
  },
  { 
    id: 14, 
    nome: "Phobos-Grunt", 
    agencia: "Roscosmos", 
    status: "Falha", 
    data: "2011-11-08", 
    foguete: "Zenit-2FG", 
    chance: 30, 
    descricao: "Ambiciosa tentativa de coletar amostras de solo da lua marciana Phobos e trazê-las de volta à Terra. Logo após o lançamento bem-sucedido, os motores que deveriam impulsionar a nave para fora da órbita terrestre falharam em disparar, deixando a sonda presa até reentrar e queimar na atmosfera meses depois.",
      imgPrincipal: "/fotos-missoes/phobos,1.jpg",  
      imgDetalheA: "/fotos-missoes/phobos,2.jpg",
      imgDetalheB: "/fotos-missoes/phobos,3.jpg"
  },
  { 
    id: 15, 
    nome: "Europa Clipper", 
    agencia: "NASA", 
    status: "Em curso", 
    data: "2024-10-10", 
    foguete: "Falcon Heavy", 
    chance: 89, 
    descricao: "Missão emblemática lançada com o objetivo de investigar a lua Europa de Júpiter. A sonda realizará dezenas de sobrevoos rasos para coletar dados espectrais, térmicos e de radar, determinando se o oceano de água líquida escondido sob a crosta de gelo possui condições químicas capazes de abrigar vida.",
    imgPrincipal: "/fotos-missoes/europa,3.jpg",
    imgDetalheA: "/fotos-missoes/europa,2.jpg",
    imgDetalheB: "/fotos-missoes/europa,1.jpg"
  }
];

const DetalhesMissao = () => {
  const { id } = useParams();
  const missao = MISSOES_MOCK.find(m => m.id === Number(id));

  if (!missao) {
    return <div className="text-white p-20 text-center">Missão espacial não encontrada no registro.</div>;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-950 text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navegação de Volta */}
        <Link to="/missoes" className="text-blue-400 hover:text-blue-300 text-sm mb-8 inline-block transition-colors">
          ← Voltar para a Galeria de Missões
        </Link>

        {/* HEADER DO DASHBOARD */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-2">
               <span className="bg-blue-900/30 text-blue-400 text-xs font-bold px-3 py-1 rounded-full border border-blue-800">
                ID: {missao.id}
              </span>
              <span className="text-slate-500 font-mono text-sm uppercase">{missao.agencia} INTERSTELLAR DIVISION</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{missao.nome}</h1>
          </div>
          
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center gap-6 shadow-md">
            <div className="text-center">
              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Status da Missão</p>
              <p className={`font-bold ${
                missao.status === 'Sucesso' ? 'text-emerald-400' : 
                missao.status === 'Falha' ? 'text-red-400' : 
                missao.status === 'Parcial' ? 'text-yellow-400' : 'text-blue-400'
              }`}>{missao.status}</p>
            </div>
            <div className="w-px h-10 bg-slate-800"></div>
            <div className="text-center">
              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Confiança da IA</p>
              <p className="font-bold text-blue-400">{missao.chance}%</p>
            </div>
          </div>
        </div>

        {/* GRID DE INFORMAÇÕES TÉCNICAS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Coluna de Dados */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl shadow-sm">
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Telemetria Básica
              </h3>
              <ul className="space-y-4">
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500 text-sm">Data de Lançamento</span>
                  <span className="text-slate-200 font-medium">{new Date(missao.data).toLocaleDateString('pt-BR')}</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500 text-sm">Veículo Espacial</span>
                  <span className="text-slate-200 font-medium">{missao.foguete}</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-500 text-sm">Operador Principal</span>
                  <span className="text-slate-200 font-medium">{missao.agencia}</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600/5 border border-blue-500/10 p-6 rounded-3xl shadow-inner">
               <h3 className="text-blue-400 font-bold mb-3 uppercase tracking-wide text-xs">Relatório Analítico</h3>
               <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                 {missao.descricao}
               </p>
            </div>
          </div>

          {/* COLUNA DE FOTOS */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* 📸 FOTO 1 - PRINCIPAL */}
              <div className="md:col-span-2 w-full h-[300px] md:h-[400px] bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center overflow-hidden relative group">
                {missao.imgPrincipal ? (
                  <img 
                    src={missao.imgPrincipal} 
                    alt={`Foto principal ${missao.nome}`} 
                    className="w-full h-full object-contain object-center transition-transform group-hover:scale-105 duration-700" 
                  />
                ) : (
                  <span className="text-slate-700 font-bold uppercase tracking-widest text-sm">IMAGEM_PRINCIPAL_MISSAO</span>
                )}
              </div>

              {/* 📸 FOTO 2 - DETALHE */}
              <div className="w-full h-[200px] bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center overflow-hidden relative">
                {missao.imgDetalheA ? (
                  <img 
                    src={missao.imgDetalheA} 
                    alt={`Detalhe A ${missao.nome}`} 
                    className="w-full h-full object-cover object-center" 
                  />
                ) : (
                  <span className="text-slate-700 text-xs font-bold uppercase tracking-widest">DETALHE_TECNICO_A</span>
                )}
              </div>

              {/* 📸 FOTO 3 - DETALHE */}
              <div className="w-full h-[200px] bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center overflow-hidden relative">
                {missao.imgDetalheB ? (
                  <img 
                    src={missao.imgDetalheB} 
                    alt={`Detalhe B ${missao.nome}`} 
                    className="w-full h-full object-cover object-center" 
                  />
                ) : (
                  <span className="text-slate-700 text-xs font-bold uppercase tracking-widest">DETALHE_TECNICO_B</span>
                )}
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DetalhesMissao;