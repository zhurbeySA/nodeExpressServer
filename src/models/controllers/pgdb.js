import dotenv from 'dotenv';

const pgPromise = require('pg-promise');

dotenv.config('../../../.env');

const initOptions = {};
const cn = {
  host: process.env.localHost,
  port: process.env.localPort,
  database: process.env.localDatabase,
  user: process.env.localUser,
  password: process.env.localPassword,
  max: 30, // use up to 30 connections
};

const pgp = pgPromise(initOptions);
const db = pgp(cn);

export default db;
