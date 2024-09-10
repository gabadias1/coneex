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

Este projeto utiliza o Padrão de Projeto Aplicado:

Utilizamos o padrão Template Method, que organiza o fluxo de operações comuns em métodos centrais, deixando partes específicas para serem implementadas individualmente.

- *Organização clara*: Operações como criar, editar, e deletar contatos seguem uma estrutura padrão.
- *Reutilização de código*: A lógica comum, como validação e interação com o banco de dados, é aplicada de maneira uniforme em diversas funções.
- *Facilidade de manutenção*: Adaptações ou extensões do fluxo principal são feitas sem alterar a base do código.

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







