import { addErrorLog } from '../helpers/utils.js';

const errorHandler = (error,req,res) => {
	const start = process.hrtime.bigint();
	addErrorLog(req,error.toString(),start,process.hrtime.bigint());
	res.json({error:'Internal Server Error'}).status(500); // default error
};

export { errorHandler };