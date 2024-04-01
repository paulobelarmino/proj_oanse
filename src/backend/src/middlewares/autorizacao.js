const database = require('../../knexconfig')

module.exports = async(req,res,next) => {
    if(!req.session || !req.session.logado){
        return res.redirect('/lideres')
    }
    const liderLogado = req.session.logado
    const lider = await database.table('lideres').where({ id: liderLogado }).first()
    res.locals.lider = lider
    next()
}