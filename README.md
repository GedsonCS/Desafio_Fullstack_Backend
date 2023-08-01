# Desafio_Fullstack_Backend

Essa API foi construida com o intuito de cadastrar usuários e os usuários cadastrarem contatos, podendo ser listados os contatos cadastrados de cada usuário

API constuida em node, com isso para rodar socalmente é necessário ter o Node instalado no computador, após isso é necessário clonar o repositório em sua máquina, acessar o projeto e utilizar o comando npm install para instalar as dependencias configure o arquivo.env e em seguida utilize o comando npm run dev para rodar o servidor

para ter acesso a docimentação via Web será necessário primenramente rodar o servidor node com npm rum dev, depois acessar pelo terminal a pasta documentation (cd documentation), após isso rodar o comando npx serve, ele trará uma URL como essa:
http://localhost:55015

entretanto a porta pode ser outra de forma aleatória

IMPORTANTE
isso deve ser feito depois de rodar o servidor backend, pois o serve escolhe como padão a porta 3000 do localhost

Rotas da API

Cadastro de usuário

Não tem autenticação
http://localhost:3000/users => => POST

Exemplo de request

{
"name": "John Doe",
"email": "teste1000@teste.com",
"password": "1234",
"phone": "32984705511"
}

exemplo de response

{
"id": 5,
"name": "John Doe",
"email": "teste1000@teste.com",
"phone": "32984705511",
"createdAt": "2023-07-31T01:57:06.650Z"
}

Login de usuário

Não tem autenticação
http://localhost:3000/login => POST

Exemplo de request

{

"email": "teste1000@teste.com",
"password": "1234"

}

exemplo de response

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNjkwNzY4NjUwLCJleHAiOjE2OTA4NTUwNTAsInN1YiI6IjUifQ.JqQZrFO1ZCQpsgtLx3lCsvVKzKfNJsSsnmM18Uk10_k"
}

Rota de Listar usuário Logado

http://localhost:3000/users => GET

precisa estar autenticado

não tem corpo de requisição

exemplo de response

{
"id": 5,
"name": "Gedson Candido",
"email": "john.doe128@example.com",
"phone": "32984705511",
"createdAt": "2023-07-31T01:57:06.650Z"
}

Atualização de Usuário

precisa estar autenticado
precisa informar o ID do usuário na URL
http://localhost:3000/users/:id => path

Exemplo de request

{
"email": "john.doe129@example.com",
"name":"Gedson Candido",
"password":"1234",
"phone":"32984705511"
}

exemplo de response

{
"id": 2,
"name": "Gedson Candido",
"email": "john.doe129@example.com",
"phone": "32984705511",
"createdAt": "2023-07-28T18:38:33.916Z"
}

Deletar usuario

http://localhost:3000/users/:id => DELETE

precisa estar autenticado
precisa informar o ID do usuário na URL

Não tem corpo de requisição e não tem response

Criar contato

precisa estar autenticado

http://localhost:3000/contact => POST

Exemplo de request

{

"contactName": "Jose",
"contactEmail": "jose@example.com",
"contactPhone": "32984705511"
}

exemplo de response

{
"id": 10,
"contactName": "Jose",
"contactEmail": "jose@example.com",
"contactPhone": "32984705511",
"createdAt": "2023-07-27T16:39:51.768Z"
}

Buscar contatos de um usuário específico

http://localhost:3000/contact => GET

precisa estar autenticado

não tem corpo de requisição

exemplo de response

[
{
"id": 9,
"contactName": "Jose",
"contactEmail": "jose@example.com",
"contactPhone": "32984705511",
"createdAt": "2023-07-27T16:39:51.017Z"
},
{
"id": 10,
"contactName": "Jose",
"contactEmail": "jose@example.com",
"contactPhone": "32984705511",
"createdAt": "2023-07-27T16:39:51.768Z"
}
]

Atualizar Contato

precisa estar autenticado
precisa informar o ID do Contato na URL

http://localhost:3000/contact/:id => PATCH

Exemplo de request

{

"contactName": "Jose1000",
"contactEmail": "jose@example.com",
"contactPhone": "32984705555"
}

exemplo de response

{
"id": 8,
"contactName": "Jose1000",
"contactEmail": "jose@example.com",
"contactPhone": "32984705555",
"createdAt": "2023-07-27T16:39:50.120Z"
}

Deletar Contato

http://localhost:3000/contact/:id => DELETE

precisa estar autenticado
precisa informar o ID do contato na URL

Não tem corpo de requisição e não tem response
