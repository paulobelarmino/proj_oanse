const express = require('express')
const router = express.Router()
const database = require('../../../knexconfig')
const bcrypt = require('bcrypt')

router.get('/',(req,res) => {
    res.render('Lideres/recuperacao',{ msg:'' })
})

router.post('/recuperar',async(req,res) => {
    const usuario =  await database('lideres').where({ email: req.body.email }).first()
    if(!usuario){
        return res.redirect(400,'/recuperacao')
    }
    if(req.body.novaSenha != req.body.confirmarNovaSenha){
        return res.redirect(400,'/recuperacao')
    }
    console.log(usuario.senha)
    database('lideres').update({
        senha: bcrypt.hashSync(req.body.novaSenha,10)
    })
    console.log(usuario.senha)
    return res.redirect('/')
})

module.exports = router