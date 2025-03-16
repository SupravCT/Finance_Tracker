const ErrorHandler= (err, req, res, next) => {
  res.json({
    message: err.message,
    status:err.status
  })
}
export default ErrorHandler