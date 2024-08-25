const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/', userController.findAll);
router.get('/:id', userController.findById);
router.post('/', userController.createNewUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;


// const { hasPermission } = require('../middleware/hasPermission');

// router.get('/', hasPermission(['ler_usuarios']), userController.findAll);
// router.get('/:id', hasPermission(['ler_usuarios']), userController.findById);
// router.post('/', hasPermission(['criar_usuario']), userController.createNewUser);
// router.put('/:id', hasPermission(['editar_usuario']), userController.updateUser);
// router.delete('/:id', hasPermission(['remover_usuario']), userController.deleteUser);