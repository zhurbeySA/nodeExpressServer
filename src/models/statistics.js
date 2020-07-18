import db from './controllers/statisticsDB';

const getDataExample = async (req, res) => {
  console.log('get data from STATISTICS server');
  const data = await db.any(req.query);
  if (data) {
    console.log('got STATISTICS data');
    res.json(data);
  } else {
    res.send('something went wrong, there\'s no data');
  }
};

export default getDataExample;
