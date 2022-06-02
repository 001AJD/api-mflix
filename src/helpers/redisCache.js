import { createClient } from 'redis';
import dotenv from 'dotenv';
dotenv.config();
let client;
const expirationTime = 20 //seconds

const createRedisClient = async () => {
	client = createClient();
	await client.connect();
};

const redisSet = async (key, value) =>{
	await client.setEx(key, expirationTime, JSON.stringify(value));
}

const redisGet = async (key)=>{
	const res = await client.get(key);
	return res;
}

const redisExists = async (key)=> {
	const res = await client.exists(key);
	return res;
}
export { createRedisClient, redisSet, redisGet, redisExists }
