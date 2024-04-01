const express = require('express')
const app = express()
const cookieSession = require('cookie-session')
const indexRoute = require('./routes/index.js')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine','ejs')
app.use(cookieSession({
    name: 'oanseSession',
    keys: ['oansemarcha'],
    maxAge: 2 * 60 * 60 * 1000
}))
app.use('/',indexRoute)

app.listen(3000, () => {
    console.log('Servidor Rodando')
})