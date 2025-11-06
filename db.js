
// const { Pool } = require('pg');


// const pool = new Pool({
//   user: 'neondb_owner',        
//   host: 'ep-cold-wave-ad5c8rw3-pooler.c-2.us-east-1.aws.neon.tech',       
//   database: 'neondb', 
//   password: 'npg_hCJTU4ud8BbW',  
//   port: 5432,             
// });

// module.exports = pool;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'neondb_owner',
  host: 'ep-cold-wave-ad5c8rw3-pooler.c-2.us-east-1.aws.neon.tech',
  database: 'neondb',
  password: 'npg_hCJTU4ud8BbW',
  port: 5432,
  ssl: {
    rejectUnauthorized: false, 
  },
});

module.exports = pool;

