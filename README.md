# API para Gerenciamento Escolar

Esta é uma API para gerenciamento de matrículas escolares e fornece funcionalidades para facilitar o cadastro e alocação de salas de aula para seus professores e alunos. 


## Rotas da API 

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=back-end-cs&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fmmagalhaesjr%2Fback-end-cs%2Fmain%2Fexport.json)

- POST        /api/classroom
- GET         /api/classroom/:id 
- PUT         /api/classroom/:id 
- DELETE      /api/classroom/:id 
- POST        /api/enrollment 
- GET         /api/enrollment/:id 
- GET         /api/enrollment/student/:id 
- DELETE      /api/enrollment/:id 
- POST        /api/user 
- GET         /api/user/:id 
- PUT         /api/user/:id 
- DELETE      /api/user/:id

## Desenvolvimento
As seguintes ferramentas foram utilizados na construção desta API:
<p>
 <img style='margin: 5px;' src="https://img.shields.io/badge/node-node%20js%20-%2320232a.svg?&style=for-the-badge&logo=Node.js"/>
 <img style='margin: 5px;' src="https://img.shields.io/badge/ADONISJS-JS?style=for-the-badge&logo=adonisjs&logoColor=white&color=%2320232a"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Postgres-%2320232a.svg?&style=for-the-badge&logo=PostgreSQL&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/.env-%2320232a.svg?&style=for-the-badge&logo=.ENV"/>
</p>

## Modelagem Banco de Dados
<img src="db.png"/>

