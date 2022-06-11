const errorHandler = (req,res) => {
	res.status(404).end(); // default error
};
export { errorHandler };