import { Router } from 'express';
import { getResponse } from '../controllers/upload.controller.js';

const router = Router();

router.route('/gemini').post(getResponse);

export default router;
