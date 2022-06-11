import { addLog } from '../../src/helpers/utils.js';
import { logger } from '../../src/helpers/logger.js';
import { mock } from 'sinon';

describe('Test Suite for addLog function',()=>{
	it('addLog logs request', (done)=>{
		const mockLogger = mock(logger);
		mockLogger.expects('info').calledOnce;
		const startTime = process.hrtime.bigint();
		const req = {
			'path' : '/mflix'
		};
		const functionName = 'testFunctionName';
		const endTime = process.hrtime.bigint();
		addLog(req, functionName, startTime, endTime);
		mockLogger.verify();
		done();
	});
});