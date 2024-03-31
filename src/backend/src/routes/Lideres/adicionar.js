const express = require('express')
const router = express.Router()
const db = require('../../../knexconfig')

router.get('/',(req,res) => {
    res.render('Lideres/adicionar')
})

router.post('/cadastrar',async(req,res) => {
    await db('lideres').insert({
        nome: req.body.nome,
        contato: req.body.contato,
        //Esses valores inicialmente serão 0 porque
        //eu apenas quero testar se a api está salvando
        //os dados corretamente
        id_endereco: 0,
        id_funcao: 0,
        status: 0
    })
    return res.redirect('/')
})

module.exports = router