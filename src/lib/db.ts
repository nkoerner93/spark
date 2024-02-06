import { Pool } from 'pg';

const {
  POSTGRES_URL,
  POSTGRES_USER,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
} = process.env;

export const pool = new Pool({
  connectionString: POSTGRES_URL,
  user: POSTGRES_USER,
  host: POSTGRES_HOST,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});