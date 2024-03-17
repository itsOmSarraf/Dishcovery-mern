import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Import routes
import healthCheckRoute from './routes/healtcheck.routes.js';
import recipeRoute from './routes/recipe.route.js';
import geminiRoute from './routes/gemini.route.js';

const app = express();

// Middleware
app.use(cors());
const jsonParser = bodyParser.json({ limit: '10mb' });
const urlencodedParser = bodyParser.urlencoded({
	limit: '10mb',
	extended: true
});
app.use(express.json());
app.use(jsonParser);
app.use(urlencodedParser);

// Add CORS middleware to set Access-Control-Allow-Origin header
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	next();
});

// Routes
app.use('/api/v1/healthcheck', healthCheckRoute);
app.use('/api/v1/recipes', recipeRoute);
app.use('/api/v1/upload', geminiRoute);

export { app };
