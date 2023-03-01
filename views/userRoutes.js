
const userController = require('../controllers/userController');

const router = require('express').Router();

router.post('/users', userController.createUser)

router.delete('/users/:id', userController.deleteUser)

router.get('/users', userController.getUser)

router.get('/users/role/:id', userController.getUserRole)

router.post('/user/login/:id', userController.login)

module.exports = router;