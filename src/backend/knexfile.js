const database = require('knex')({

  client: 'pg',
  connection: {
    database: 'proj_oanse',
    user:     'postgres',
    password: 'servidor'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
})

module.exports = database