import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.MONGO_CONNECTION_STRING;

const createConenction = async () => {
	try
	{
		await mongoose.connect(connectionString);
		console.log('Connected to Database!');
	}
	catch(e)
	{
		console.error(e.toString());
	}
};

export { createConenction };