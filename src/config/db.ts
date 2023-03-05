import {createPool, Pool} from 'mysql2/promise';
import config from './config';
const globalPool: Pool | undefined = undefined;

export async function connect(): Promise <Pool> {

  // If the pool was already created, return it instead of creating a new one.
  if(typeof globalPool !== 'undefined') {
    return globalPool;
  }

  const pool = await createPool({
    host: config.development.database.host, 
    user: config.development.database.user,
    password: config.development.database.password,
    database: config.development.database.name,
    port: config.development.database.port,
    
  });

  // const pool = await createPool({
  //   host: config.development.database.host, 
  //   user: config.development.database.user,
  //   password: config.development.database.password,
  //   database: config.development.database.name,
  //   port: config.development.port,
    
  // });
  return pool;

}




// export const executeQuery = async (query: string, values?: any[]) => {
//   const conn = await db.getConnection();
//   try {
//     const result = await conn.query(query, values);
//     return result[0];
//   } catch (error) {
//     throw error;
//   } finally {
//     conn.release();
//   }
// };
