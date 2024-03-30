const express = require('express')
const app = express()
const indexRoute = require('./routes/index.js')

app.use(express.urlencoded({extends:true}))
app.use(express.json())
app.use('/index',indexRoute)

app.listen(3000, () => {
    console.log('Servidor Rodando')
})