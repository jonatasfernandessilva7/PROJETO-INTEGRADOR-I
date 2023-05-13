# :checkered_flag: SCHOOL LAB UFC

Monitoramento e controle do fluxo de entrada e saída nos laboratórios e biblioteca.

## :technologist: Membros da equipe e Orientador

Membro 538429 - Gustavo Menezes De Sousa - Análise e Desenvolvimento De Sistemas

Membro 540089 - Jônatas Fernandes Silva - Análise e Desenvolvimento De Sistemas

Membro 539644 - Robert Michael Ávila - Análise e Desenvolvimento De Sistemas

Prof. Orientador - Anderson Uchôa.

## :people_holding_hands: Papéis ou tipos de usuário da aplicação

- administrador
- aluno
- monitor
- aluno não logado

## :spiral_calendar: Entidades ou tabelas do sistema

- usuários
- monitores
- laboratórios
- computadores

## :triangular_flag_on_post:	 Principais funcionalidades da aplicação

**Funcionalidades gerais e de usuário comum:**

- login com autenticação
- perfil de usuário 
- cadastro de usuário
- reserva do computador no laboratório especificado
- histórico de uso
- Atualização de dados do perfil
- Ver um tutorial de como mexer no site
- Ter uma aba de sugestões para emitir opiniões e sugestões sobre o site

**Funcionalidades monitores:**

- Escolha do laboratório onde ele monitora
- Visualização dos computadores em uso do laboratório
- Visualização do usuário de cada computador 

**Funcionalidades adm geral:**

- escolha de qual laboratório em que vai supervisionar
- escolha de qual computador vai supervisionar
- poder ver detalhes do histórico do computador
- poder ver detalhes do histórico do usuário 
- poder excluir a conta do usuário 
- Cadastrar monitores
- Excluir monitores
- Cadastrar o número de computadores dos laboratórios


## :desktop_computer: Tecnologias e frameworks utilizados

**Frontend:**

- Html
- css
- bootstrap 
- javascript 
- swetAlert

**Backend:**

- Node js
- express js
- sequelize
- bcrypt 
- express-session
- body-parser 
- connect-flash
- Postgres


## :shipit: Operações implementadas para cada entidade da aplicação


| Entidade| Criação | Leitura | Atualização | Remoção |
| --- | --- | --- | --- | --- |
| Usuários | X |  X  |  |  |
| Monitores | X |   X |   | |

## :neckbeard: Rotas da API REST utilizadas

| Método HTTP | URL |
| --- | --- |
| GET | /|
| GET | /Aluno/login.html|
| GET | Aluno/cadastro.html|
| GET | /views/Lab1.html|
| GET | /views/Lab2.html|
| GET | /views/Lab3.html|
| GET | /views/Lab4.html/|
| GET | /views/Biblioteca.html|
| GET | /views/home.html|
| GET | /views/Aluno/Ajuda.html|
| GET | /views/Aluno/Contato.html|
| GET | /views/Aluno/Historico.html|
| GET | /views/Aluno/perfil.html|
| GET | /logout.html|
| POST | /Aluno/cadastro/login.html |
| POST | /Aluno/login/home.html |
| PUT | /views/Aluno/perfil.html |

## Documentação
* [Documento de visão do projeto](https://github.com/anderson-uchoa/github-template-projeto-integrador/blob/main/docs/documento_visao.docx)
* [Regras gerais da disciplina](https://github.com/anderson-uchoa/github-template-projeto-integrador/blob/main/docs/regras_gerais.pdf)
* [Apresentação do Projeto] - Vídeo a ser criado

