import Router from 'express';
import { recipeAll } from '../controllers/recipe.controller.js';
import { recipeSolo } from '../controllers/recipe.controller.js';
const router = Router();

router.route('/all').get(recipeAll);
router.route('/full/:foodid').get(recipeSolo);

export default router;
