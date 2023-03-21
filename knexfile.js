module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: process.env.SQLITE_FILENAME || './src/data/db.sqlite'
    },
    migrations: {
      directory: process.env.SQLITE_MIGRATIONS || './src/data/migrations'
    },
    useNullAsDefault: true
  }
};