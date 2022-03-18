import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const connectionString = process.env.MONGO_CONNECTION_STRING;

const createConenction = () => {
	mongoose.connect(connectionString, (err)=>{
		if(err)
		{
			console.log('Error occured while connecting to db... ' + err);
		}
		else
		{
			console.log('Connected to Database...!');
		}
	});
}

export { createConenction }