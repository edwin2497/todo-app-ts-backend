import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const cert = process.env.PG_SSL_CA?.replace(/\\n/g, '\n');

export const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: Number(process.env.PG_PORT),
    ssl:{
        rejectUnauthorized: true,
        ca: cert
    },
})

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

pool.connect( (err : any, connection:any) => {
    if (err) throw err;
    console.log('Database is connected successfully !');
    connection.release();
});