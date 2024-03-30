const express = require('express')
const router = express.Router()
const adicionarRoute = require('./adicionar')

router.use('/adicionar',adicionarRoute)
router.get('/',(req,res) => {
    res.render('Lideres/index')
})

module.exports = router