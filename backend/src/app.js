import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

import healthCheckRoute from './routes/healtcheck.routes.js';
import recipeRoute from './routes/recipe.route.js';
app.use('/api/v1/healthcheck', healthCheckRoute);
app.use('/api/v1/recipes', recipeRoute);
export { app };

// http://localhost:8000/api/v1/healthcheck/{anything}
//http://localhost:8000/api/v1/recipes/
