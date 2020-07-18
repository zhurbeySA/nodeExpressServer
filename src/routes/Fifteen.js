import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const projectPath = path.resolve('staticPages/Fifteen/index.html');
  res.sendFile(projectPath);
});

export default router;
