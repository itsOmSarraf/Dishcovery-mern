import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

app.use(cors());
const jsonParser = bodyParser.json({ limit: '10mb' });
const urlencodedParser = bodyParser.urlencoded({
	limit: '10mb',
	extended: true
});
app.use(express.json());
app.use(jsonParser);
app.use(urlencodedParser);
// app.use(express.json({ limit: '100mb' }));
// app.use(express.raw({ limit: '100mb', type: 'image/*' }));

import healthCheckRoute from './routes/healtcheck.routes.js';
import recipeRoute from './routes/recipe.route.js';
import geminiRoute from './routes/gemini.route.js';

app.use('/api/v1/healthcheck', healthCheckRoute);
app.use('/api/v1/recipes', recipeRoute);
app.use('/api/v1/upload', geminiRoute);

export { app };
