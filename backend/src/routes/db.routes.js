import { Router } from 'express';
import { uploadToDb } from '../controllers/mongo.controller.js';

const router = Router();

router.route('/upload').post(uploadToDb);

export default router;
