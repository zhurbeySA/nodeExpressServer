import express from 'express';
import getDataExample from '../models/index';

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('page "/" was returned');
  req.query = 'SELECT * FROM "Users"';
  next();
}, getDataExample);

export default router;
