
const userController = require('../controllers/userController');

const router = require('express').Router();

router.post('/users', userController.createUser)

router.delete('/users/:id', userController.deleteUser)

router.get('/users', userController.getUser)

module.exports = router;