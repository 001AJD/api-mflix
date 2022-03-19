import express from 'express';
import { router as mflixRouter} from './routes/mflix.js';
import { createConenction } from './dbconfig/mongoConnection.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { createRedisClient } from './helpers/redisCache.js';
import helmet from 'helmet';

const app = express();

// middlewares
app.use(express.json());
app.use(helmet());

createConenction(); // db connection
createRedisClient(); // redis client

// routers
app.use('/mflix', mflixRouter);
app.use(errorHandler);

app.listen(3000, ()=>{
	console.log('listening on port 3000');
});