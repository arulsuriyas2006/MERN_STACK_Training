const express = require('express')
const router =express.Router()

const {login,profile} = require('../controller/AdminController')

router.post('/login',login)
router.get('/profile',profile)

module.exports =router;