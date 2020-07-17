import express from 'express';
import indexRouter from './api/index';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
