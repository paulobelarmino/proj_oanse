module.exports = {

  client: 'pg',
  connection: {
    database: 'proj_oanse',
    user:     'postgres',
    password: ''
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}