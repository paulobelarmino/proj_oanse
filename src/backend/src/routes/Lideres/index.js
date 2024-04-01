const express = require('express')
const router = express.Router()
const autorizacao = require('../../middlewares/autorizacao')

const adicionarRoute = require('./adicionar')
const loginRoute = require('./login')
const homeIndexRoute = require('./Home/index')
const recuperarSenhaRoute = require('./recuperacao')

router.use('/home/index',[autorizacao],homeIndexRoute)
router.use('/adicionar',adicionarRoute)
router.use('/login',loginRoute)
router.use('/recuperacao',recuperarSenhaRoute)
router.get('/',(req,res) => {
    res.render('Lideres/index')
})

module.exports = router