import {Sequelize} from 'sequelize';
import { config as configDotenv } from 'dotenv'
import { resolve } from 'path';
configDotenv({
    path: resolve(__dirname, '../../', '.env')
})
// database configuration
export const database = new Sequelize({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: 'postgres',
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  logging: false
})

