import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('/Users/sergey.zhurbey/Desktop/desktop_files/files/projects/nodeExpressServer/staticPages/onpointProject/index.html');
});

export default router;
