import express from "express";
import ToDoController from "../controllers/ToDoController.js";

// create a router instance
const ToDoRouter = express.Router();

// define the routes
ToDoRouter.get("/", ToDoController.getAllToDos);
ToDoRouter.get("/:id", ToDoController.getToDoById);
ToDoRouter.post("/", ToDoController.createToDo);
ToDoRouter.patch("/:id", ToDoController.updateToDo);
ToDoRouter.delete("/:id", ToDoController.DeleteToDo);


// export the router
export default ToDoRouter;
