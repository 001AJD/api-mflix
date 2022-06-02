import { createRedisClient } from '../../src/helpers/redisCache.js';

describe('Test Suite for redisCache',()=>{
    it('Should create redis client', (done) => {
        createRedisClient();
        // TODO : add assertion
        done();
    });
});