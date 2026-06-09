const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Direitos Autorais */}
        <div className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Cosmohub. Todos os direitos reservados.
        </div>

        {/* Links secundários */}
        <div className="flex gap-6 text-sm text-slate-400">
          <span className="hover:text-blue-400 cursor-pointer transition-colors">
            Termos de Uso
          </span>
          <span className="hover:text-blue-400 cursor-pointer transition-colors">
            Privacidade
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;