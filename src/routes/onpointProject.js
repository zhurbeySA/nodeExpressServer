import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  const projectPath = path.resolve('staticPages/onpointProject/index.html');
  res.sendFile(projectPath);
});

export default router;
