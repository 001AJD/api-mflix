import { logger } from './logger.js';
const addLog = (req, functionName, startTime, endTime) => {
	const time = ((endTime - startTime) / 1000000n); // convert nano seconds to miliseconds
	const logObject = {
		path : req.path,
		functionName: functionName,
		time: `${time}(ms)`
	};
	logger.info(logObject);
}
export { addLog }