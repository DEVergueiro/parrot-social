const UserController = require('../controllers/userController')

const express = require('express'),
routes = express.Router()


routes.post("/user", UserController.create)

module.exports = routes