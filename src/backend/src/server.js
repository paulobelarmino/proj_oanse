const express = require('express')
const app = express()
const indexRoute = require('./routes/index.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','ejs')
app.use('/',indexRoute)

app.listen(3000, () => {
    console.log('Servidor Rodando')
})