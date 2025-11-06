const pool = require('./db');

(async () => {
  console.log('🚀 กำลังเชื่อมต่อฐานข้อมูล...');
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Connected successfully!');
    console.log(res.rows);
  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await pool.end();
  }
})();
