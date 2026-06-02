import errors from "../config/errors.js";
// error handler middleware
export default function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    // logging the error
    console.error(err.stack || err);

    const postgresError = errors[err.code];
    const statusCode = postgresError?.status || err.statusCode || 500;
    const message = postgresError?.message || err.message || "Internal Server Error ❌";

    const data = {
        status: "error",
        message
    };

    // sending the response
    res.status(statusCode).json(data);
}