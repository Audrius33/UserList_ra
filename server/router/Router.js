const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const validateUser = require('../middle/ValidateUser')

router.post('/addUser', validateUser.validatingUser, controller.saveItems)
router.get('/getUsers', controller.sendUsers)
router.get('/delUser/:id', controller.deleteUser)
router.get('/updateUser/:email', controller.updateUser)
router.post('/oneUserUpdate/user', controller.userToBeUpdated)

module.exports = router