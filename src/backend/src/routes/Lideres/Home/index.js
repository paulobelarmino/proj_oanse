const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.render('Lideres/Home/index',{ lider: res.locals.lider })
})

module.exports = router