[M3S01] Descrição do exercício - implantação de RBAC
Os exercícios desta semana serão um passo a passo para a implementação de um Controle de Autenticação Baseado em Funções (RBAC - Role Based Access Control).

Para a execução do projeto, faça o clone do projeto padrão, que é uma API para gerenciamento de uma escola criada em NodeJs no módulo 01.

Link do projeto padrão: https://github.com/FuturoDEV-Nature/api_escola

Obs: compreendo que é um conteúdo extenso, por isso, se for implementada uma única rota corretamente já contará como feito a implementação do RBAC e o exercício já poderá ser entregue.

[M3S01] Ex. 1 - Criação dos Models das novas tabelas
Para implementar o sistema de RBAC vamos precisar dos seguintes models:

Role

id: integer

description: string

createdAt: Date

updatedAt: Date

Permission

id: integer

description: string

createdAt: Date

updatedAt: Date

User

id: integer

nome: string

email: string

senha: string

E as tabelas de relacionamento de muitos para muitos (mano to many):

UserRole

id: integer

roleId: integer

references: Role

userId: integer

references: User

createdAt: Date

updatedAt: Date

PermissionRole

id: integer

roleId: integer

references: Role

permissionId: integer

references: Permission

createdAt: Date

updatedAt: Date

[M3S01] Ex. 2 - Criação das migrations
Crie as migrations para configurar no banco todas as novas tabelas. Você pode usar o seguinte modelo simplificado:

'use strict';

const User = require('../../models/User');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Users', Usuarios.tableAttributes);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Users');
  }
};


[M3S01] Ex. 3 - Criação da Controller RBAC
Crie uma controller chamada ‘rbac.controller.js’ para configurar todos os métodos que serão utilizados para gerenciar o controle de acesso. Os métodos são:

createOnePermission

cria uma permission

createOneRole

cria uma role

listPermissions

lista todas as perrmissions

listRoles

lista todas as roles

listPermissionsByRole

lista as permissões por roles

addRoleToUser

adiciona um usuário a uma role

addPermissionToRole

adiciona uma permission a uma role

[M3S01] Ex. 4 - Configuração da rota RBAC
Crie o arquivo 'rbac.routes.js' que será o arquivo de configuração das rotas para os métodos criados no exercício passado.

[M3S01] Ex. 5 - Criação do Middleware de validação
Crie um middleware chamado ‘hasPermission’ para validar se o usuário tem a role e a permission específica para acessar o recurso.

[M3S01] Ex. 6 - Configuração do middleware nas rotas.
Importe e configure o middleware nas rotas para implementar a validação de permissões. Exemplo:

// auth é o middlewarede autenticação comum
// hasPermission é o middleware de validação das roles
categoryRoutes.get('/listOneCategory/:id', auth, hasPermission(['sListarCategorias','Falso']), listOneCategory)

