import express from 'express';
import { getDataExample, getStatisticsByPeriod } from '../models/statistics';

const router = express.Router();

// Check api work route
router.get('/check', async (req, res) => {
  console.log('Check api work route');

  const data = await getDataExample();
  if (data) {
    res.json(data);
  } else {
    res.send('something went wrong, there\'s no data');
  }
});

const produceQuery = async (periodScale, req, res) => {
  let data = [];

  try {
    data = await getStatisticsByPeriod(req.params.statField, periodScale,
      req.query.dateFrom, req.query.dateTo);
    res.json(data);
  } catch (error) {
    res.status(500).send(`Status 500, bad request. ${error}`);
  }
};

router.get('/year/:statField', async (req, res) => {
  produceQuery('year', req, res);
});

router.get('/month/:statField', async (req, res) => {
  produceQuery('month', req, res);
});

router.get('/day/:statField', async (req, res) => {
  produceQuery('day', req, res);
});

export default router;
