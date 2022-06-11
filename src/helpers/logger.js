import winston from 'winston';

const logConfiguration = {
	level: 'info',
	format: winston.format.combine(
		winston.format.json()
		),
	'transports' : [ new winston.transports.Console() ]
};

const errorLoggerConfiguration = {
	level: 'error',
	format: winston.format.combine(
		winston.format.json()
		),
	'transports' : [ new winston.transports.Console() ]
};

const logger = winston.createLogger(logConfiguration);
const errorLogger = winston.createLogger(errorLoggerConfiguration);

export { logger, errorLogger }