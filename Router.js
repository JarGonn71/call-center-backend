import Router from 'express'
import UserController from './Controllers/UserController.js';
const router = new Router();

router.post('/create-new-application', UserController.create);
router.get('/applications', UserController.getAll);

export default router;
