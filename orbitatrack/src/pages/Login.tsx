import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  // Estado para alternar entre tela de Login (false) e Cadastro (true)
  const [isRegister, setIsRegister] = useState(false);

  // Estados dos campos do formulário
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); 
    setIsLoading(true);
    setErrorMessage('');

    if (isRegister && password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem.');
      setIsLoading(false);
      return;
    }

    try {
      if (isRegister) {
        // =====================================================================
        // 🔙 BACK-END DEV (CADASTRO): Insira o fetch/axios de Registro aqui!
        // Exemplo: POST para 'http://localhost:8080/api/auth/register'
        // Enviando: { name, email, password }
        // =====================================================================
        console.log("Enviando para o Back-end (CADASTRO):", { name, email, password });
        alert("Dados de Cadastro enviados! Conecte sua API em Java aqui.");
      } else {
        // =====================================================================
        // 🔙 BACK-END DEV (LOGIN): Insira o fetch/axios de Login aqui!
        // Exemplo: POST para 'http://localhost:8080/api/auth/login'
        // Enviando: { email, password }
        // =====================================================================
        console.log("Enviando para o Back-end (LOGIN):", { email, password });
        alert("Dados de Login enviados! Conecte sua API em Java aqui.");
      }
    } catch (error) {
      setErrorMessage('Erro na comunicação com o servidor espacial.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-md w-full space-y-8 bg-slate-900/60 p-8 md:p-10 rounded-3xl border border-slate-800 backdrop-blur-xl relative z-10 shadow-2xl">
        
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            {isRegister ? 'Criar Nova Conta' : 'Acesso Restrito'}
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            {isRegister ? 'Cadastre-se na plataforma Cosmohub' : 'Painel de controle Cosmohub'}
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          {errorMessage && (
            <div className="bg-red-500/10 border border-red-500/50 text-red-400 text-sm p-3 rounded-lg text-center">
              {errorMessage}
            </div>
          )}

          <div className="space-y-4">
            {/*Campo nome,aparece apenas se for no cadastro */}
            {isRegister && (
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Nome Completo</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Nome do Operador"
                />
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">E-mail de Acesso</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="operador@cosmohub.com"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Senha</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-slate-300"
                >
                  {showPassword ? (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.29 3.29m0 0a10.05 10.05 0 015.71-2.29c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0l-3.29-3.29" /></svg>
                  )}
                </button>
              </div>
            </div>

            {/*Campo de confirmar senha,aparece apenas se for no cadastro */}
            {isRegister && (
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Confirmar Senha</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-3.5 px-4 mt-4 rounded-full shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 transition-all"
          >
            {isLoading ? "Processando..." : (isRegister ? "REGISTRAR CONTA" : "INICIAR SESSÃO")}
          </button>
        </form>

        {/* Botão para alternar entre os formulários */}
        <div className="text-center mt-6">
          <button 
            onClick={() => {
              setIsRegister(!isRegister);
              setErrorMessage('');
            }} 
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors focus:outline-none"
          >
            {isRegister ? 'Já tem uma conta? Faça Login' : 'Não tem conta? Cadastre-se'}
          </button>
        </div>

        <div className="text-center mt-4">
          <Link to="/" className="text-sm text-slate-500 hover:text-white transition-colors">
            ← Voltar para a Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Login;