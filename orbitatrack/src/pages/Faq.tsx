import { useState } from 'react';

const Faq = () => {
  // Estado para controlar qual pergunta está aberta
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Lista de perguntas e respostas 
  const faqs = [
    {
      pergunta: "O que é a OrbitaTrack?",
      resposta: "A OrbitaTrack é uma plataforma unificada que centraliza dados históricos e preditivos sobre missões espaciais de diversas agências globais, como NASA, SpaceX e ESA. Nosso objetivo é democratizar o acesso à informação da economia espacial."
    },
    {
      pergunta: "Como a Inteligência Artificial é utilizada no sistema?",
      resposta: "Nós utilizamos bases de dados robustas do Kaggle para treinar modelos de Machine Learning. Essa IA analisa padrões de lançamentos passados para calcular a probabilidade de sucesso de futuras missões e prever custos baseados no perfil tecnológico do foguete."
    },
    {
      pergunta: "De onde vêm os dados das missões?",
      resposta: "Os dados são extraídos, tratados e consolidados a partir de APIs públicas de agências espaciais e datasets validados pela comunidade científica no Kaggle. Nossa API backend (construída em Java) orquestra a entrega dessas informações para o painel."
    },
    {
      pergunta: "A plataforma monitora lançamentos em tempo real?",
      resposta: "O foco atual do MVP (Minimum Viable Product) é o rastreamento histórico e a análise preditiva através de IA. No entanto, a arquitetura do sistema já prevê a integração de websockets para telemetria em tempo real em fases futuras do projeto."
    },
    {
      pergunta: "Como o projeto se conecta com os Objetivos da ONU (ODS)?",
      resposta: "A OrbitaTrack apoia diretamente os ODS 9 (Inovação e Infraestrutura) e ODS 13 (Ação Climática). Ao consolidar dados de satélites e missões, fornecemos uma base analítica para pesquisas focadas em monitoramento ambiental e mitigação de mudanças climáticas na Terra."
    }
  ];

  // Função para abrir/fechar a pergunta
  const toggleFaq = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); 
    } else {
      setOpenIndex(index); 
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-950 text-slate-200 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3 block">Central de Ajuda</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Perguntas Frequentes</h1>
          <p className="text-slate-400">
            Tire suas dúvidas sobre a operação, tecnologia e o impacto da nossa plataforma espacial.
          </p>
        </div>

        {/* Lista de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-xl transition-colors duration-300 ${
                openIndex === index ? 'bg-slate-900/80 border-blue-500/50' : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className={`font-semibold text-lg ${openIndex === index ? 'text-blue-400' : 'text-slate-200'}`}>
                  {faq.pergunta}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-400' : 'text-slate-500'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              {/* Conteúdo da Resposta com transição de altura suave */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 mb-5' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 text-slate-400 leading-relaxed">
                  {faq.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faq;