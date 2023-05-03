# PROJETO-INTEGRADOR-I

# School Lab UFC

Monitoramento e controle do fluxo de entrada e saída nos laboratórios e biblioteca.

# Objetivo Geral

Auxiliar no monitoramento e no controle de entrada e saída dos laboratórios e da biblioteca da UFC. 

# Objetivos Específicos

Melhorar a segurança nos laboratórios e nas bibliotecas.

identificar quem entra e sai dos laboratórios e da biblioteca e os horários em que estes eventos ocorreram, para que desta maneira caso haja algum estrago na máquina e/ou nos materiais que o estudante usou/consumiu se possa saber que foi ele mesmo ou outra pessoa, desta forma evitando que alguém seja acusado injustamente e, que providencias sejam tomadas diante disto.

# Motivação

O uso das listas de chamadas manuais é retrógrado e falho, pois alguém pode esquecer de colocar seu nome nela, propositalmente ou não, ou pode até mesmo informar o horário de forma equivocada, dessa maneira dificultando o trabalho dos monitores no controle e monitoramento do fluxo de alunos. Por isso, nós, da UFC de Itpajé Campus Jardins de Anita, estamos desenvolvendo uma aplicação web que facilite esse controle de fluxo, dessa forma auxiliando os monitores e o campus.


# Stakeholders

Corpo discente, monitores dos laboratórios, UFC.

# Impacto

Melhorar a segurança dos hardwares, pois caso haja alguma infração o estudante que estava naquela máquina, naquele horário irá ser responsabilizado pelos seus atos.

# Usuários

Administrador geral (Acesso a tudo)
Administrador monitor (Acesso apenas dados referentes ao seu laboratório em específico) 
usuário comum, aluno (vai ter acesso apenas dados referentes à sua conta)

# Como vai funcionar

A aplicação funcionará via web. Inicialmente o usuário irá acessar o site, se ele não estiver logado, terá que realizar o login, que o levará a sua página de perfil, caso não tenha conta registrada, ele terá que fazer o cadastro, utilizando seus dados institucionais. Após este procedimento, o usuário de acordo com seu nível de acesso será redirecionado para a página correspondente, podendo escolher o laboratório e reservar o computador, ir para o seu histórico de uso ou acessar seu perfil para alterar dados, se ele desejar. 

Caso seja um usuário administrador, ele terá acesso a uma página exclusiva onde ele poderá ver dados (a hora que ele entrou, saiu, email de quem está utilizando determinado computador e o que ele está acessando) dos usuários comuns. Além disso,  ele também terá funcionalidades exclusivas, como mudar o nível de acesso dos alunos (caso eles sejam monitores, ou deixem de ser). 
