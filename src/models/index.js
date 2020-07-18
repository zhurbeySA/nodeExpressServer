import db from './controllers/pgdb';

const getDataExample = async (req, res) => {
  console.log('index model');
  const data = await db.any(req.query);
  if (data) {
    console.log('gom some data');
    res.json(data);
  } else {
    res.send('something went wrong, no data');
  }
};

export default getDataExample;
