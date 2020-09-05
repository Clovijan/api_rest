import { Router } from 'express';
import userController from '../controllers/UserController';

import authentication from '../middlewares/authentication';

const router = new Router();

router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.create);
router.put('/', authentication, userController.update);
router.delete('/', authentication, userController.delete);

export default router;
