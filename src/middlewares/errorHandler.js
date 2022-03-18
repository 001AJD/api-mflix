const errorHandler = (req,res,next) => {
	res.sendStatus(500); // default error
}
 export { errorHandler }