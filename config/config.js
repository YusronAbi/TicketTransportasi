const mysql = require('mysql2');
const dotenv = require('dotenv');

// ini konfigurasi dari file .env
dotenv.config();

//koneksi ke databasenya
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Database connected successfully');
});

module.exports = connection;
