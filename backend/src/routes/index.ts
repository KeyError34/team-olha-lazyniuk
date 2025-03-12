import express, { Request, Response } from 'express';
import cityRoutes from '../domain/cities/routes.js';
const router = express.Router();

router.get('/', (req: Request, res: Response): void => {
  res.render('index', { title: 'Express' });
});

router.use('/cities', cityRoutes);

export default router;
