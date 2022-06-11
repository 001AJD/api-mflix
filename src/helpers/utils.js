import { logger, errorLogger } from './logger.js';

const addLog = (req, message, startTime, endTime) => {
	const time = ((endTime - startTime) / 1000000n); // convert nano seconds to miliseconds
	const logObject = {
		path : req.path,
		message: message,
		time: `${time}(ms)`
	};
	logger.info(logObject);
}

const addErrorLog = (req, message, startTime, endTime) => {
	const time = ((endTime - startTime) / 1000000n); // convert nano seconds to miliseconds
	const logObject = {
		path : req.path,
		message: message,
		time: `${time}(ms)`
	};
	logger.error(logObject);
}
export { addLog, addErrorLog }