import express from 'express';
import getDataExample from '../models/statistics';

const router = express.Router();

router.get('/year', (req, res, next) => {
  console.log('get statistics data year data');
  req.query = 'SELECT * FROM calls LIMIT 10';
  next();
}, getDataExample);

router.get('/month', (req, res) => {
  console.log('get statistics data month data');
  res.send('get month data');
});

router.get('/day', (req, res) => {
  console.log('get statistics data day data');
  res.send('get day data');
});

export default router;
