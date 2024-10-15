const { Pool } = require('pg');

const pool = new Pool({
  user: 'lzfeiapc',
  host: 'kala.db.elephantsql.com',
  database: 'lzfeiapc',
  password: 'yk5-cQw87FLgjJij70x4pc3S6B7SNErW',
  port: 5432,
});

pool.connect()
  .then(() => console.log('Conexión exitosa a PostgreSQL'))
  .catch(err => console.error('Error de conexión:', err));

module.exports = pool;
