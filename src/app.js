import express from "express";
import requestLogger from "./middleware/requestLogger.js";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler.js";
import ToDoRouter from "./routes/ToDoRouter.js";
import RagRouter from "./routes/RagRouter.js";
// declare app instance 
const app = express();

// use json middleware to parse the request body
app.use(express.json());
app.use(requestLogger);
app.use(cookieParser());

// use the ToDoRouter
app.use("/api/v1/todos", ToDoRouter);
app.use("/api/v1/rag", RagRouter);
// welcome message route
app.get("/", (req, res) => {
    // sending a welcome message
    const message = "Welcome to the API ✅";
    // data to send
    const data = {message, status: "success"};
    // sending the response
    res.status(200).json(data);
});

// error handling middleware
app.use(errorHandler);

// export the app instance
export default app;