import ToDoService from "../services/ToDoService.js";

async function getAllToDos(req, res, next) {
    // get all the todos from the database
    try {
        const todos = await ToDoService.allToDos();
        res.status(200).json({
            status: "success",
            message: "All Todos fetched successfully",
            data: todos
        });
    } catch (err) {
        next(err);
    }
}

async function getToDoById(req, res, next) {
    // get the todo by id from the database
    try {
        const { id } = req.params;
        const todo = await ToDoService.getToDoByIdService(id);
        res.status(200).json({
            status: "success",
            message: "Todo fetched successfully",
            data: todo
        });
    } catch (err) {
        next(err);
    }
}

async function createToDo(req, res, next) {
    // create a new todo in the database
    try {
        const { task } = req.body;  
        // create the todo in the database
        const result = await ToDoService.createToDoService(task);
        // return the response
        res.status(201).json({
            status: "success", 
            message: "Todo created successfully",
            data: result
        });

    } catch (err) {
        next(err);
    }
}

async function updateToDo(req, res, next) {
    try {
        // exctracting the id from the paramter
        const { id } = req.params;
        const content = req.body;
        // calling the service function 
        const result = await ToDoService.updateToDo(id, content);
        // sending back response
        res.status(200).json({
            status: "success",
            message: "Todo updated succesfully",
            data: result
        });
    } catch (err) {
        next(err);
    }
}

async function DeleteToDo(req, res, next) {
    try {
        // extract the id parameter
        const { id } = req.params;
        // send the id to the service layers
        await ToDoService.DeleteToDoService(id);
        // send response
        res.status(200).json({
            status: "success",
            message: `ToDo at id:${id} deleted successfully`
        });
        
    } catch (err) {
        // sending the error to the error middlware
        next(err);
    }
}
export default {
    getAllToDos,
    getToDoById,
    createToDo,
    updateToDo, 
    DeleteToDo
};