const { connection } = require("../database/connection");
const { DataTypes } = require("sequelize")
// esta importando apenas o datatypes do sequelize

//user = é o nome da tabela, e depois os atributos

const User = connection.define('user',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING,
        unique:true
    },
    password:{
        type: DataTypes.STRING
    },
    createdAt:DataTypes.DATE,
    updatedAt:DataTypes.DATE
})

module.exports = User 
//qd exporta dentro do objeto {}, ao importar, deve incluir tbm o {} --- { User }

//após criar o model, criar a migration 
//npx sequelize-cli migration:generate --name create-user
//ou então, poderia criar todos os models, e depois criar todas as migrations ao mesmo tempo