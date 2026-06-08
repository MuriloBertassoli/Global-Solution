import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

// Mock data expandido
const MISSOES_MOCK = [
  { id: 1, nome: "Artemis I", agencia: "NASA", status: "Sucesso", data: "2022-11-16", foguete: "SLS Block 1", chance: 100 },
  { id: 2, nome: "Starlink G6-4", agencia: "SpaceX", status: "Sucesso", data: "2024-03-15", foguete: "Falcon 9", chance: 98 },
  { id: 3, nome: "Luna 25", agencia: "Roscosmos", status: "Falha", data: "2023-08-11", foguete: "Soyuz-2.1b", chance: 45 },
  { id: 4, nome: "Juice", agencia: "ESA", status: "Em curso", data: "2023-04-14", foguete: "Ariane 5", chance: 92 },
  { id: 5, nome: "Crew-8", agencia: "SpaceX", status: "Sucesso", data: "2024-03-04", foguete: "Falcon 9", chance: 99 },
  { id: 6, nome: "Psyche", agencia: "NASA", status: "Em curso", data: "2023-10-13", foguete: "Falcon Heavy", chance: 88 },
  { id: 7, nome: "Perseverance", agencia: "NASA", status: "Sucesso", data: "2020-07-30", foguete: "Atlas V", chance: 95 },
  { id: 8, nome: "Starship IFT-3", agencia: "SpaceX", status: "Parcial", data: "2024-03-14", foguete: "Starship", chance: 60 },
  { id: 9, nome: "Euclid", agencia: "ESA", status: "Sucesso", data: "2023-07-01", foguete: "Falcon 9", chance: 94 },
  { id: 10, nome: "Soyuz MS-24", agencia: "Roscosmos", status: "Sucesso", data: "2023-09-15", foguete: "Soyuz-2.1a", chance: 97 },
  { id: 11, nome: "James Webb", agencia: "NASA", status: "Sucesso", data: "2021-12-25", foguete: "Ariane 5", chance: 91 },
  { id: 12, nome: "Rosetta", agencia: "ESA", status: "Sucesso", data: "2004-03-02", foguete: "Ariane 5G+", chance: 85 },
  { id: 13, nome: "Inspiration4", agencia: "SpaceX", status: "Sucesso", data: "2021-09-16", foguete: "Falcon 9", chance: 96 },
  { id: 14, nome: "Phobos-Grunt", agencia: "Roscosmos", status: "Falha", data: "2011-11-08", foguete: "Zenit-2FG", chance: 30 },
  { id: 15, nome: "Europa Clipper", agencia: "NASA", status: "Em curso", data: "2024-10-10", foguete: "Falcon Heavy", chance: 89 }
];

const Missoes = () => {
  //Lendo os parâmetros da url
  const [searchParams, setSearchParams] = useSearchParams();
  const agenciaNaUrl = searchParams.get('agencia') || 'Todas';

  // O estado inicial do filtro agora vem da url
  const [filtroAgencia, setFiltroAgencia] = useState(agenciaNaUrl);
  const [busca, setBusca] = useState('');

  // Efeito: Se a url mudar lá em cima (pelo menu), atualizamos o select aqui embaixo
  useEffect(() => {
    setFiltroAgencia(searchParams.get('agencia') || 'Todas');
  }, [searchParams]);

  // Função para quando o usuário trocar a agência direto no select da página
  const handleTrocarAgencia = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const novaAgencia = e.target.value;
    setFiltroAgencia(novaAgencia);
    
    // Atualiza a URL para refletir a nova agência escolhida
    if (novaAgencia === 'Todas') {
      searchParams.delete('agencia');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ agencia: novaAgencia });
    }
  };

  // Lógica de filtro
  const missoesFiltradas = MISSOES_MOCK.filter(missao => {
    const bateAgencia = filtroAgencia === 'Todas' || missao.agencia === filtroAgencia;
    const bateBusca = missao.nome.toLowerCase().includes(busca.toLowerCase()) || 
                     missao.foguete.toLowerCase().includes(busca.toLowerCase());
    return bateAgencia && bateBusca;
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-950 text-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-2">Explorador de Missões</h1>
            <p className="text-slate-400">Dados históricos e predições de IA sobre lançamentos globais.</p>
          </div>

          {/* Barra de filtros */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input 
              type="text" 
              placeholder="Buscar missão ou foguete..."
              className="bg-slate-900 border border-slate-800 rounded-full px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64 transition-all"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
            <select 
              className="bg-slate-900 border border-slate-800 rounded-full px-5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all"
              value={filtroAgencia}
              onChange={handleTrocarAgencia}
            >
              <option value="Todas">Todas Agências</option>
              <option value="NASA">NASA</option>
              <option value="SpaceX">SpaceX</option>
              <option value="ESA">ESA</option>
              <option value="Roscosmos">Roscosmos</option>
            </select>
          </div>
        </div>

        {/* Grid de missões */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missoesFiltradas.map(missao => (
            <Link 
              to={`/missoes/${missao.id}`} 
              key={missao.id} 
              className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-all group cursor-pointer shadow-lg block"
            >
              <div className="flex justify-between items-start mb-4">
                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider ${
                  missao.agencia === 'SpaceX' ? 'bg-slate-200 text-black' :
                  missao.agencia === 'NASA' ? 'bg-red-600 text-white' :
                  missao.agencia === 'ESA' ? 'bg-blue-600 text-white' : 'bg-orange-600 text-white'
                }`}>
                  {missao.agencia}
                </span>
                <span className={`text-xs font-bold ${
                  missao.status === 'Sucesso' ? 'text-emerald-400' :
                  missao.status === 'Falha' ? 'text-red-400' : 
                  missao.status === 'Parcial' ? 'text-yellow-400' : 'text-blue-400'
                }`}>
                  ● {missao.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{missao.nome}</h3>
              <p className="text-slate-400 text-sm mb-4">{missao.foguete} • {new Date(missao.data).toLocaleDateString('pt-BR')}</p>

              {/* Área do kaggle */}
              <div className="mt-6 pt-4 border-t border-slate-800/50">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Chance de Sucesso (IA)</span>
                  <span className="text-sm font-mono font-bold text-blue-400">{missao.chance}%</span>
                </div>
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full transition-all duration-1000 ${
                      missao.chance > 80 ? 'bg-blue-500' : missao.chance > 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${missao.chance}%` }}
                  ></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mensagem caso não encontre nada */}
        {missoesFiltradas.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 italic">Nenhuma missão encontrada com esses filtros.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Missoes;