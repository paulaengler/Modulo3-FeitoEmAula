const {connection} = require("../database/connection")
const {DataTypes} = require("sequelize")
const User = require("../models/User")
const UserRole = require("../models/UserRole")

const Role = connection.define('role', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    description:{
        type:DataTypes.STRING,
        unique: true
    },
    createdAt:{
        type: DataTypes.DATE,
        defaultValue: Date.now()
    },
    updatedAt:{
        type:DataTypes.DATE
    }
})

User.belongsToMany(Role, {through: UserRole})
Role.belongsToMany(User, {through: UserRole})

module.exports = Role 