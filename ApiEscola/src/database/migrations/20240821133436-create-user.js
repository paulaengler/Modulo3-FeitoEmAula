'use strict';

const User = require("../../models/User")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
    await queryInterface.createTable(User.tableName, User.tableAttributes);
  
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable(User.tableName);
     
  }
};


//User.tableName --- nao precisa colocar todos os atributos novamente, ja tem as informações no model
//apenas para criar a tabela inicial, qd for edição (criar ou remover nova coluna), nao usa esse tablename
//usa o atributo novo aqui
//rodar migration -- npx sequelize-cli db:migrate