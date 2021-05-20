const express = require('express')
const router = express.Router()
const controller = require('../controllers/main')
const validateUser = require('../middle/ValidateUser')

router.post('/addUser', validateUser.validatingUser, controller.saveItems)
router.get('/getUsers', controller.sendUsers)
router.get('/delUser/:id', controller.deleteUser)
router.get('/updateUser/:id', controller.updateUser)

module.exports = router