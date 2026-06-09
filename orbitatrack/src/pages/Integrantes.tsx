
import fotoMurilo from '../assets/Murilo Bertassoli Massini.jpg';
import fotoGiovanni from '../assets/giovanni.jpeg';
import fotoGabriel from '../assets/Gabriel Deotti Zanatta.jpg';
import fotoGian from '../assets/Gianlu.jpeg';
import fotoRuan from '../assets/ruan.jpeg';

const GithubIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const Integrantes = () => {
  // Array 1: Liderança 
  const lideranca = [
    {
      id: 1,
      cargo: "Comandante",
      nome: "Murilo Bertassoli Massini",
      rm: "RM 567383",
      turma: "1TDSPA",
      foto: fotoMurilo, 
      desenvolveu: "Front-End Design Engineering (React & Tailwind)",
      github: "https://github.com/MuriloBertassoli",
      linkedin: "https://www.linkedin.com/in/murilomassini"
    },
    {
      id: 2,
      cargo: "Sub Comandante",
      nome: "Giovanni Barbosa Sacristan",
      rm: "RM 567384",
      turma: "1TDSPA",
      foto: fotoGiovanni,
      desenvolveu: "Domain Driven Design (API em Java)",
      github: "https://github.com/gi13090",
      linkedin: "https://www.linkedin.com/in/giovanni-sacristan-884383388/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bt1%2Bgyo3wTHC8RVagEV1vlQ%3D%3D"
    }
  ];

  // Array 2: Tripulação
  const tripulacao = [
    {
      id: 3,
      cargo: "Tripulação",
      nome: "Ruan Ribeiro Guimaraes",
      rm: "RM 567693",
      turma: "1TDSPA",
      foto: fotoRuan,
      desenvolveu: "Building Relational Database (Oracle)",
      github: "https://github.com/Ruan-Ribeiro00",
      linkedin: "https://www.linkedin.com/in/ruan-r-guimaraes?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      id: 4,
      cargo: "Tripulação",
      nome: "Gianluca Kenis de Araujo",
      rm: "RM 566765",
      turma: "1TDSPA",
      foto: fotoGian,
      desenvolveu: "Artificial Intelligence (Modelos Kaggle)",
      github: "https://github.com/GianKAraujo",
      linkedin: "https://www.linkedin.com/in/gianluca-k-de-araujo-33235b38a"
    },
    {
      id: 5,
      cargo: "Tripulação",
      nome: "Gabriel Deotti Zanatta",
      rm: "RM 567258",
      turma: "1TDSPA",
      foto: fotoGabriel,
      desenvolveu: "Software Engineering & Python",
      github: "https://github.com/GabrielDeottiZanatta",
      linkedin: "https://www.linkedin.com/in/gabriel-deotti-zanatta-42750735b/"
    }
  ];

  // Componente interno para renderizar o Card de forma reutilizável
  const MembroCard = ({ membro }: { membro: any }) => (
    <div className="w-full max-w-sm bg-slate-900/50 rounded-2xl border border-slate-800 p-6 flex flex-col items-center text-center hover:border-blue-500/30 transition-colors group shadow-lg">
      
      {/*Cargo e nome */}
      <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-2 block">{membro.cargo}</span>
      <h3 className="text-2xl font-extrabold text-white mb-6">{membro.nome}</h3>

      {/*Foto */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <img 
          src={membro.foto} 
          alt={`Foto de ${membro.nome}`} 
          className="relative w-36 h-36 rounded-full object-cover border-2 border-slate-700 group-hover:border-blue-500 transition-colors"
        />
      </div>

      {/* RM e turma */}
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-slate-800 text-slate-300 text-sm font-mono px-3 py-1 rounded border border-slate-700">
          {membro.rm}
        </span>
        <span className="bg-blue-900/30 text-blue-400 text-sm font-bold px-3 py-1 rounded border border-blue-800/50">
          Turma: {membro.turma}
        </span>
      </div>

    
      <div className="mb-8 w-full bg-slate-950/50 rounded-lg p-3 border border-slate-800/60">
        <span className="block text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Responsabilidade na Missão</span>
        <span className="text-sm text-slate-300 font-medium">{membro.desenvolveu}</span>
      </div>

      {/*Link github e linkedin */}
      <div className="flex gap-8 mt-auto pt-5 border-t border-slate-800/60 w-full justify-center">
        <a href={membro.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-transform hover:scale-110" title="GitHub">
          <GithubIcon />
        </a>
        <a href={membro.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#0a66c2] transition-transform hover:scale-110" title="LinkedIn">
          <LinkedinIcon />
        </a>
      </div>

    </div>
  );

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-950 text-slate-200 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da página */}
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3 block">Engenharia de Software</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Tripulação Cosmohub</h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Conheça os desenvolvedores por trás da plataforma que está mapeando a nova fronteira da economia espacial.
          </p>
        </div>

        {/* Layout da equipe */}
        <div className="flex flex-col gap-8 items-center">
          
          {/*Comandantes */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {lideranca.map((membro) => (
              <MembroCard key={membro.id} membro={membro} />
            ))}
          </div>

          {/*Tripulação */}
          <div className="flex flex-wrap justify-center gap-8 w-full">
            {tripulacao.map((membro) => (
              <MembroCard key={membro.id} membro={membro} />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default Integrantes;