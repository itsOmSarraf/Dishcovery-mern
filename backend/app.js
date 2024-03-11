import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

import healthCheckRoute from './routes/healthcheck.route';

app.use('/api/v1/healthcheck', healthCheckRoute);

export { app };

// http://localhost:8000/api/v1/healtcheck/{anything}
