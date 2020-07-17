const db = require('./controllers/pgdb.js');

const getDataExample = (req, res) => {
  console.log('index model');
  db.any(req.query)
    .then((data) => {
      console.log('got some data');
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default getDataExample;
