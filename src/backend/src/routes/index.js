const express = require('express')
const router = express.Router()
const lideresRoute = require('./Lideres/index')

router.get('/',(req,res) => {
    res.render('index')
})

router.use('/lideres',lideresRoute)

module.exports = router