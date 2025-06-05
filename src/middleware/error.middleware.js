const errorHandler = (err, req, res, next) => {
    console.log(err.stack);

    const status = err.status || 500;

    return res.status(status).json({
        status,
        message: err.message,
        path: req.path
    })
}

export default errorHandler;