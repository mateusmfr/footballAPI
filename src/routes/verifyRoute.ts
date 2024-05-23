import { Router } from 'express';
import VerifyController from '../controllers/verifyController';

const verifyController = new VerifyController();

const router = Router();

router.post('/', verifyController.verify);

export default router;
