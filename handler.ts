import { APIGatewayProxyHandler } from 'aws-lambda';
import { fetchRedshiftData } from './service/redshiftService';

export const handler: APIGatewayProxyHandler = async (event, _context) => {
  try {
    const query = 'SELECT * FROM your_table LIMIT 10';
    const data = await fetchRedshiftData(query);

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error: any) {
    console.error('Error querying Redshift:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
