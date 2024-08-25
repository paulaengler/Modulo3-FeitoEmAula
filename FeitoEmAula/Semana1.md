Semana 1

Aula 1


**Projeto em node

server.js - configuração, montagem do servidor
index.js - chamada do servidor

class server{
    constructor - chamada de cada um dos serviços (server=express()
    )
    middleware - regras, autenticação- rbac (autenticação) - intermediadores
    database - conexao do sequelize
    rotas - configurar todas as rotas - arquivo de rotas
    iniciação do servidor
}

database.config.js
configuração do banco de dados 
.env = arquivo privado 

Criou um Projeto como base - mas usará a api escola
https://github.com/FuturoDEV-Nature/rbac-node-modulo3
main - código montado, 100% funcional
rbac sera montado na develop

Api-escola 
https://github.com/FuturoDEV-Nature/api_escola
clonar o repositorio
npm install

RBAC - Role Based Access Control ou Controle de Acesso baseado em Função
para gerenciar e controlar o acesso de usuarios a recursos e funcionalidades
tbm é um sistema de autenticação

estrutura: 
usuarios
funcoes - atribuir o que cada usuario pode fazer (Role)
ex: adm, professor, secretária, aluno
permissoes - direitos ou autorizações que cada role tem
ex: adm pode criar um usuario - pode fazer uma divisão maior entre as permissoes
associação - relação entre usuarios e funcoes
hierarquia de funcoes - funcoes superiores tem acesso a um conjunto mais amplo de permissões
ex: adm pode ter acesso as coisas de prof e aluno
professor - professor e aluno
aluno, só aluno

facilita para distribuir e administrar as permissões
mais facil trabalhar uma exceção - ex, um usuario específico pode ter acesso a uma funcao especifico

role - visitante, usuario, administrador
permissão - criar usuario, editar usuario, cadastrar curso


Criar algumas tabelas para usar o RBAC:
User
Role
Permission
PermissionRole (relacionamentos)
UserRole (relacionamentos)

o arquivo .env_example - deixar apenas .env

PostgreSQL
databases
botao direito - create --- nome igual database do arquivo .env

rodar todas as migrations
npx sequelize-cli db:migrate

npm run start.dev -- ver qual é o script


aula 2

https://github.com/FuturoDEV-Nature/rbac-node-modulo3

relacionamento entre as tabelas user e role
e permission e role

por isso as tabelas
UserRole e PermissionRole

esses relacionamentos serao do tipo muitos para muitos
1 user - muitas roles
1 role - muitos users

1 role - muitas permissions
1 permission - muitas roles

permissionId é chave estrangeira(permissionrole.js) - quando tem o references e model (tabela que vai referenciar)

primeiro models
depois configurar os relacionamentos usando o sequelize no arquivo Role
belongsToMany - função do sequelize

User.belongsToMany(Role, {through:UserRole})
Role.belongsToMany(User, {through: UserRole})
'pertence a muitos' - 'através'

gera a migration em branco 
npx sequelize-cli migration:generate --name create-rbac
importa os models
await queryInterface .... 
cria conforme os relacionamentos,
pra deletar, do geral pro mais específico
para rodar e criar as tabelas no pgAdmin
npx sequelize-cli db:migrate

select * from "SequelizeMeta"
ler os comandos de migration no pgAdmin que rodaram

**Criação da Controller


aula 3

** Criação das rotas

listPermissions - get
createOnePermission - post
listRoles - get
createOneRole - post
listPermissionsByRole - get by id
addPermissionToRole - post
addRoleToUser - post


https://github.com/FuturoDEV-Nature/rbac-node-modulo3/blob/develop/src/controllers/user.controller.js
UserController.js
instalar: npm install bcrypt

https://github.com/FuturoDEV-Nature/rbac-node-modulo3/blob/develop/src/routes/usuarios.routes.js

https://github.com/FuturoDEV-Nature/rbac-node-modulo3