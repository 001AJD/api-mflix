const errorHandler = (req,res,next) => {
	res.status(404).end(); // default error
}
export { errorHandler }