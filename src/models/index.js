import db from './controllers/pgdb';

const getDataExample = async (req, res) => {
  const data = await db.any(req.query);
  if (data) {
    res.json(data);
  } else {
    res.send('something went wrong, no data');
  }
};

export default getDataExample;
