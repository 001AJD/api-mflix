import winston from 'winston';

const logConfiguration = {
	level: 'info',
	format: winston.format.combine(
		winston.format.json()
	),
	'transports' : [ new winston.transports.Console() ]
};

const logger = winston.createLogger(logConfiguration);

export { logger };