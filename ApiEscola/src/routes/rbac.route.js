const { Router } = require('express')
const RbacController = require("../controllers/RbacController")

const RbacRouter = new Router()

RbacRouter.get("/listPermissions", RbacController.listPermissions)
RbacRouter.get("/listRoles", RbacController.listRoles)
RbacRouter.post("/createOnePermission", RbacController.createOnePermission)
RbacRouter.post("/createOneRole", RbacController.createOneRole)
RbacRouter.post("/addPermissionToRole", RbacController.addPermissionToRole)
RbacRouter.post("/addRoleToUser", RbacController.addRoleToUser)
RbacRouter.get("/listPermissionsByRole/:id", RbacController.listPermissionsByRole)


module.exports = RbacRouter

//coloca o nome da função e nao coloca o (), router espera receber um callback(promisse)
//router, ele espera receber a função, mas ele decide quando vai executar a função, se colocar (), vai dar erro
//RbacController.listPermissions -- apenas assim, sem () no final

//no post - coloca no body - raw - json
// {
// "description": "admin"
// }
// createOnePermisson 
// {
//     "description": "criar_usuario"
// }
// http://localhost:3000/rbac/createOneRole
// http://localhost:3000/rbac/createOnePermission
// http://localhost:3000/rbac/listPermissions
// http://localhost:3000/rbac/listRoles
//http://localhost:3000/rbac/addRoleToUser
// {
//     "roleId": 1,
//     "userId": 1
//   }