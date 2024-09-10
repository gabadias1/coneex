# Connex
Este é um projeto desenvolvido para a disciplina de Engenharia de Software (BCC3004) na UTFPR. O objetivo do software é gerenciar uma agenda de contatos, permitindo a adição, visualização e exclusão de entradas de contatos, além de permitir a criação de uma lista de lembretes contendo um calendário.
## Tecnologias 

<p align="center">
   <img src="https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png" alt="JavaScript" width="60" height="60"/> 
   <img src="https://raw.githubusercontent.com/github/explore/main/topics/nodejs/nodejs.png" alt="Node.js" width="60" height="60"/>
   <img src="https://raw.githubusercontent.com/github/explore/main/topics/mongodb/mongodb.png" alt="MongoDB" width="60" height="60"/> 
</p>


Versões:
Node.js : v20.16.0
Mongodb : v7.0.14


## Contribuidores
Este projeto foi desenvolvido pelos seguintes alunos:

- Pedro Conrado

- Gabriel Dias

- Felipe A M Salazar

## Arquitetura do Projeto

A arquitetura MVC (Model-View-Controller) é um padrão utilizado para organizar o código e separar as responsabilidades em aplicações web e de software. Ela divide a aplicação em três componentes principais:

Model (Modelo): Gerencia os dados e a lógica de negócios, realizando operações como criar, ler, atualizar e deletar (CRUD). Define as regras de negócio e validação.
View (Visão): Apresenta os dados ao usuário e define a interface (HTML/CSS). É responsável por exibir as informações de maneira clara e atualizá-las conforme necessário.
Controller (Controlador): Interpreta as ações do usuário, atualiza o Model e a View, agindo como intermediário entre eles.
Como se aplica ao projeto:
Model: Interação com backend (CRUD de contatos e lembretes).
View: Estrutura da UI com HTML/CSS.
Controller: JavaScript que lida com eventos de usuário e atualiza o Model e a View.

## Iniciando Servidor

```bash
Configuração e Instalação
```
link para instalação Node: https://nodejs.org/dist/v20.17.0/node-v20.17.0-x64.msi

link para instalação Mongodb: https://www.mongodb.com/try/download/community

Ja com Node, mongodb instalados

### Clonando o Repositório
Primeiro, clone o repositório do projeto:

`git clone https://github.com/gabadias1/coneex.git` e `cd local_onde_repositorio_está`:
Após se redirecionar para o local do repositorio usando "cd", use os comandos `npm install` e `npm install method-override`

### Configuração do Backend
No diretório backend, instale as dependências necessárias:
`cd backend`
`npm install`

### Configuração do Frontend
No diretório frontend, instale as dependências necessárias:
`cd frontend`
`npm install`

Após terminar a instalação, volte ao repositorio principal `cd SEU_REPOSITORI` e inicie o projeto com `npm start`

### Testes
Para verificar o teste utilize: `npm test`







