import express from 'express';
import indexRouter from './api/index';
import statisticsRouter from './api/statistics';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/api', indexRouter);
app.use('/api/statistics', statisticsRouter);

// Check server page
app.get('/check', (req, res) => {
  console.log('get check page');
  res.send('check page');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
