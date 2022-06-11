import { body, validationResult } from 'express-validator';

const validatePayload = (req, res, next) => {
	const errors = validationResult(req);
	if(!errors.isEmpty())
	{
		res.status(400).json( {errors : errors.array()} ).end();
	}
	else
	{
		next();
	}
};

const movieValidationRules = () => {
	return [
		body('title').exists().isString(),
		body('fullplot').exists().isString(),
		body('year').exists().isInt(),
		body('cast').custom((value)=>{
			if((!Array.isArray(value)) || value === '' || value === null || value === undefined)
			{
				throw new Error(`Invalid ${value} field`);
			}
			return value;
		}),
		body('genres').custom((value)=>{
			if((!Array.isArray(value)) || value === '' || value === null || value === undefined)
			{
				throw new Error(`Invalid ${value} field`);
			}
			return value;
		})
	];
};

export { movieValidationRules, validatePayload };