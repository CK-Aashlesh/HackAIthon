import mysql from 'mysql2/promise';

// Shared global connection pool across API routes
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'hackaithon',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const initializeDB = async () => {
  try {
    const connection = await pool.getConnection();

    await connection.query(`
      CREATE TABLE IF NOT EXISTS hai_registrations (
        id INT AUTO_INCREMENT PRIMARY KEY,
        team_name VARCHAR(100) NOT NULL UNIQUE,
        member_count INT NOT NULL CHECK (member_count >= 2 AND member_count <= 4),
        members_data JSON NOT NULL,
        registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Basic tracking table to mock traffic
    await connection.query(`
      CREATE TABLE IF NOT EXISTS hai_visitors (
        id INT AUTO_INCREMENT PRIMARY KEY,
        ip_address VARCHAR(45) NOT NULL,
        visit_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    connection.release();
    console.log('Database initialized successfully.');
  } catch (error) {
    console.error('Failed to initialize database:', error);
  }
};

initializeDB();

export default pool;
