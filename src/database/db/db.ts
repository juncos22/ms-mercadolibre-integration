import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  host: process.env.HOST_POSTGRESQL || 'localhost',
  port: parseInt(process.env.PORT_POSTGRESQL || '5432'),
  user: process.env.USER_POSTGRESQL || 'postgres',
  password: process.env.PASSWORD_POSTGRESQL || 'postgres',
  database: process.env.DATABASE_POSTGRESQL || 'postgres_db',
});

export default pool;
