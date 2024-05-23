import { Router } from 'express';
import verifyRouter from './verifyRoute';

const router = Router();

router.use('/verify', verifyRouter);

export default router;
