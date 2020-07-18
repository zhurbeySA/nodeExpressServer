import '@babel/polyfill';
import express from 'express';
import indexRouter from './api/index';
import statisticsRouter from './api/statistics';
import onpointRouter from './routes/onpointProject';
import FifteenRouter from './routes/Fifteen';

const port = 3000;
const app = express();

app.use(express.json());

// api routes
app.use('/api', indexRouter);
app.use('/api/statistics', statisticsRouter);

// static project pages
app.use('/onpointProject', onpointRouter);
app.use('/Fifteen', FifteenRouter);
app.use('/onpointProject/assets', express.static('staticPages/onpointProject/assets'));
app.use('/FifteenProject/assets', express.static('staticPages/Fifteen/assets'));

// Check server page
app.get('/check', (req, res) => {
  console.log('get check page');
  res.send('check page');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
