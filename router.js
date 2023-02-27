const router = require('express').Router();

const userRoutes = require('./views/userRoutes');
const roleRoutes = require('./views/roleRoutes');

router.use('/', userRoutes);
router.use('/', roleRoutes);

module.exports = router;