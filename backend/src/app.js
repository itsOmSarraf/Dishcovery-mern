import express from 'express';
import cors from 'cors';
import multer from 'multer';

const app = express();
app.use(cors());

// Parse multipart/form-data globally for the geminiRoute
app.use('/api/v1/upload', multer().single('imageFile'));

import healthCheckRoute from './routes/healtcheck.routes.js';
import recipeRoute from './routes/recipe.route.js';
import geminiRoute from './routes/gemini.route.js';

app.use('/api/v1/healthcheck', healthCheckRoute);
app.use('/api/v1/recipes', recipeRoute);
app.use('/api/v1/upload', geminiRoute);

export { app };
