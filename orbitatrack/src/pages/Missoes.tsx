import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

/* // MOCK DATA MANTIDO AQUI PARA REFERÊNCIA CASO O SERVIDOR CAIA 
const MISSOES_MOCK = [
  { id: 1, nome: "Artemis I", agencia: "NASA", status: "Sucesso", data: "2022-11-16", foguete: "SLS Block 1", chance: 100 },
  // ...
];
*/

// Define o formato da missão que esperamos receber do Java
interface Missao {
  id: number;
  nome: string;
  agencia: string;
  status: string;
  data: string; // ou Date, dependendo de como o Java envia
  foguete: string;
  chance: number;
}

const Missoes = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const agenciaNaUrl = searchParams.get('agencia') || 'Todas';

  const [filtroAgencia, setFiltroAgencia] = useState(agenciaNaUrl);
  const [busca, setBusca] = useState('');
  
  // ESTADOS PARA A INTEGRAÇÃO COM O BACK-END
  const [missoes, setMissoes] = useState<Missao[]>([]); // Inicialmente um array vazio
  const [isLoading, setIsLoading] = useState(true); // Controla o "Carregando..."
  const [erroConsulta, setErroConsulta] = useState('');

  // EFEITO 1: Atualiza o filtro se a URL mudar
  useEffect(() => {
    setFiltroAgencia(searchParams.get('agencia') || 'Todas');
  }, [searchParams]);

  // EFEITO 2: Busca os dados na API do Java (Render) quando a página carrega
  useEffect(() => {
    const buscarMissoesDoBackend = async () => {
      try {
        setIsLoading(true);
        // COLOQUE AQUI A ROTA EXATA QUE SEU AMIGO CRIOU PARA LISTAR AS MISSÕES
        const resposta = await fetch('https://projeto-espacial-6.onrender.com/missoes'); 
        
        if (!resposta.ok) {
           throw new Error('Falha ao obter os dados do servidor espacial.');
        }

        const dadosDoJava = await resposta.json();
        setMissoes(dadosDoJava); // Coloca os dados que vieram da nuvem no nosso estado
        setErroConsulta('');
      } catch (error) {
        console.error("Erro na API:", error);
        setErroConsulta('Não foi possível conectar à base de dados. O servidor pode estar hibernando (aguarde um momento e recarregue) ou o link da API está incorreto.');
      } finally {
        setIsLoading(false);
      }
    };

    buscarMissoesDoBackend();
  }, []); // O array vazio [] garante que isso rode apenas UMA VEZ ao entrar na página

  // Função para quando o usuário trocar a agência direto no select da página
  const handleTrocarAgencia = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const novaAgencia = e.target.value;
    setFiltroAgencia(novaAgencia);
    
    if (novaAgencia === 'Todas') {
      searchParams.delete('agencia');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ agencia: novaAgencia });
    }
  };

  // Lógica de filtro (AGORA USANDO O ESTADO 'missoes' QUE VEIO DA API)
  const missoesFiltradas = missoes.filter(missao => {
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

        {/* FEEDBACK VISUAL PARA O USUÁRIO ENQUANTO O RENDER "ACORDA" OU SE DER ERRO */}
        {isLoading && (
          <div className="text-center py-20">
            <svg className="animate-spin h-10 w-10 text-blue-500 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            <p className="text-slate-400 font-medium">Estabelecendo link com o servidor (Render)...</p>
            <p className="text-slate-500 text-xs mt-2">Isso pode levar até 50 segundos caso o servidor esteja hibernando.</p>
          </div>
        )}

        {erroConsulta && !isLoading && (
           <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-2xl text-center mb-8">
             <p className="text-red-400 font-bold">{erroConsulta}</p>
           </div>
        )}

        {/* Grid de missões */}
        {!isLoading && !erroConsulta && (
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
                {/* Ajuste simples caso a data venha nula do banco */}
                <p className="text-slate-400 text-sm mb-4">{missao.foguete} • {missao.data ? new Date(missao.data).toLocaleDateString('pt-BR') : 'Data Indefinida'}</p>

                {/* Área da IA */}
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
        )}

        {/* Mensagem caso não encontre nada, só mostra se já carregou e não deu erro */}
        {!isLoading && !erroConsulta && missoesFiltradas.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 italic">Nenhuma missão encontrada com esses filtros no banco de dados.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Missoes;