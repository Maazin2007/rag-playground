// request logger middleware
export default function requestLogger(req, res, next) {
    // logging the request method and url
    console.log(`${req.method} ${req.url}`);
    // sending to the next middleware or route handler
    next();
}