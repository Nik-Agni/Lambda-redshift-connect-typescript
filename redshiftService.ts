import { Client } from 'pg';

const getRedshiftClient = (): Client => {
  return new Client({
    host: process.env.REDSHIFT_HOST,
    port: Number(process.env.REDSHIFT_PORT) || 5439,
    user: process.env.REDSHIFT_USER,
    password: process.env.REDSHIFT_PASSWORD,
    database: process.env.REDSHIFT_DB
  });
};

export const fetchRedshiftData = async (query: string): Promise<any[]> => {
  const client = getRedshiftClient();
  await client.connect();

  try {
    const result = await client.query(query);
    return result.rows;
  } finally {
    await client.end();
  }
};
