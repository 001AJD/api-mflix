import express from 'express';
import { router as mflixRouter} from './routes/mflix.js';
import { createConenction } from './dbconfig/mongoConnection.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// middlewares
app.use(express.json());

// db connection
createConenction();

// routers
app.use('/mflix', mflixRouter);
app.use(errorHandler);

app.listen(3000, ()=>{
	console.log('listening on port 3000');
});