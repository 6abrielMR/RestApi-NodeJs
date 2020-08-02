const { Router } = require('express');
const router = Router();

const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('../controllers/index.controller');

router.get('/users', getUsers);
router.post('/get/user', getUserById);
router.post('/users', createUser);
router.put('/update/user', updateUser);
router.delete('/delete/user', deleteUser);

module.exports = router;