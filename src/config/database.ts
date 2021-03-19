import {Sequelize} from 'sequelize';

export const database = new Sequelize({
  database: 'ping-pong',
  host: "localhost",
  dialect: 'postgres',
  username: '*',
  password: '*',
  storage: ':memory:'
})

