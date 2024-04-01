const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const database = require('../../../knexconfig')

router.get('/',(req,res) => {
    res.render('Lideres/login',{ error: req.query.error })
})

router.post('/login',async(req,res) => {
    const usuario = await database('lideres').where({ email: req.body.email }).first()
    console.log(usuario)
    if(!usuario){
        return res.redirect('/lideres/login?error=1')
    }
    if(bcrypt.compareSync(req.body.senha,usuario.senha)){
        req.session.logado = usuario.id
        return res.redirect('/Lideres/Home/index')
    } else {
        req.session = null
        return res.redirect('/lideres/login?error=1')
    }
})

router.get('/sair',(req,res) => {
    req.session = null
    return res.redirect('/lideres/login')
})

module.exports = router