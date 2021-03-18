const { Pool } = require('pg')


const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'materiaprima',
  password: '332000',
  port: 5432,
})

pool.query('SELECT NOW()', (err, res) => {
    
    try { console.log('conexão bem sucedida');
        
    } catch (error) {
        console.log(err);
    }
  //pool.end() 
})

module.exports = pool