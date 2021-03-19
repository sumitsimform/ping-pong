import {Sequelize} from 'sequelize';
import { config as configDotenv } from 'dotenv'
import { resolve } from 'path';
configDotenv({
    path: resolve(__dirname, '../../', '.env')
})
export const database = new Sequelize({
  database: 'ping-pong',
  host: "localhost",
  dialect: 'postgres',
  username: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  storage: ':memory:',
  logging: false
})

