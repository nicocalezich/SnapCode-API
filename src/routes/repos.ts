import { Router } from 'express';
import reposController from '../controllers/repos'

const router = Router();

router.get('/', reposController.get);

router.post('/', reposController.create)

export default router;
