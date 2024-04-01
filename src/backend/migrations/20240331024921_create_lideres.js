exports.up = function(knex) {
    return knex.schema.createTable('lideres',(table) => {
      table.increments('id').primary()
      table.text('nome')
      table.text('email')
      table.text('senha')
      table.integer('contato')
      table.integer('id_endereco')
      table.integer('id_funcao')
      table.integer('status')
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('lideres')
  }