const bcrypt = require('bcrypt')

exports.seed = async function(knex) {

  await knex('lideres').del()
  await knex('lideres').insert([
    {
      id: 1,
      nome: 'admin',
      email: 'admin@email.com',
      senha: bcrypt.hashSync('senhaadminuser',10),
      contato: 123456,
      id_endereco: 0,
      id_funcao: 0,
      status: 0 
    }
  ])
}