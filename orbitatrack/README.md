# 🌌 Cosmohub

> Toda missão para o cosmos, rastreada em um só lugar.

O **Cosmohub** é uma plataforma inteligente e centralizada projetada para a Nova Economia Espacial. O sistema rastreia e consolida dados de missões espaciais reais das maiores agências do mundo (NASA, SpaceX, ESA e Roscosmos), oferecendo um painel de controle interativo com análises preditivas baseadas em Inteligência Artificial.

---

## 🎓 Equipe (Global Solution)
* **Murilo Bertassoli Massini** - RM: 567383
* **Giovanni Barbosa Sacristan** - RM: 567548
* **Gabriel Deott Zanatta** - RM: 567258
* **Gianluca Kenis de Araujo** - RM: 566765
* **Ruan Ribeiro Guimaraes** - RM: 567693

🎥 **[Clique aqui para assistir ao nosso Pitch no YouTube] (COLOQUE_O_LINK_AQUI)**

---

## 🌍 Impacto e ODS
Este projeto foi desenvolvido como solução para a **Global Solution**, alinhando-se diretamente aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU, em especial o **ODS 9 (Indústria, Inovação e Infraestrutura)**, democratizando o acesso a dados complexos da economia espacial e fomentando a pesquisa acadêmica através de análises de IA.

## 🚀 Funcionalidades Principais

* **Dashboard de Missões:** Galeria completa de lançamentos com status, data e informações do veículo espacial.
* **Detalhes por Missão:** Telas dinâmicas individuais contendo telemetria básica, relatórios analíticos e galeria de imagens exclusivas.
* **Filtros e Buscas Dinâmicas:** Navegação fluida para buscar missões por nome, foguete ou filtragem direta por Agência Operadora.
* **Análise Preditiva (IA):** Exibição de "Chance de Sucesso" gerada por Inteligência Artificial (utilizando dados e modelos do Kaggle).
* **Autenticação:** Sistema de login e cadastro integrado via API.

## 🛠️ Tecnologias Utilizadas

Este repositório contém a aplicação **Front-end**, construída com foco em performance e interface de usuário moderna.

* **React (Vite):** Biblioteca principal para construção da interface.
* **TypeScript:** Adição de tipagem estática para um código mais seguro e escalável.
* **Tailwind CSS:** Framework utilitário para estilização rápida, responsiva e com suporte a *Dark Mode*.
* **React Router DOM:** Gerenciamento de rotas e navegação dinâmica (SPA).
* **Fetch API:** Integração assíncrona com o servidor Back-end RESTful.

## ⚙️ Arquitetura e Integração (Back-end)

O Cosmohub opera de forma totalmente integrada (via requisições JSON) a uma API **Java/Spring Boot** hospedada na nuvem (Render). 

* **URL da API (Produção):** `https://projeto-espacial-6.onrender.com`
* **Repositório do Back-end:** [Link para o GitHub do Back-end] (COLOQUE_O_LINK_DO_SEU_AMIGO_AQUI)

O Back-end é responsável por fornecer a listagem do banco de dados relacional, processar a autenticação de usuários e aplicar as políticas de CORS para consumo seguro do Front-end.

## 💻 Como rodar o projeto localmente

Siga os passos abaixo para testar a interface em sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/MuriloBertassoli/Global-Solution.git](https://github.com/MuriloBertassoli/Global-Solution.git)