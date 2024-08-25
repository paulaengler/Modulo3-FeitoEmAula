const { DataTypes } = require("sequelize")
const {connection} = require("../database/connection")
const Permission = require("../models/Permission")
const Role = require("../models/Role")

const PermissionRole = connection.define("permissionsRole", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    permissionId: {
        type: DataTypes.INTEGER,
        references: {
            model: Permission,
            key: 'id'
        }
    },
    roleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        default: Date.now()
    },
    updatedAt: {
        type: DataTypes.DATE
    }
})

module.exports = PermissionRole