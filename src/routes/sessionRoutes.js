import { Router } from 'express';

import sessionController from '../controllers/SessionController';

const router = new Router();

router.post('/', sessionController.store);

export default router;
