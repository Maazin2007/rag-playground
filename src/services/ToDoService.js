import ToDoRepo from "../repositories/ToDoRepo.js";

async function allToDos() {
    // get all the todos from the database
    return await ToDoRepo.findAllTodos();
}

async function getToDoByIdService(id) {
    // get the todo by id from the database
    return await ToDoRepo.fetchById(id);
}

async function createToDoService(task) {
    // create a new todo in the database
    return await ToDoRepo.createTodo(task);
}

async function updateToDo(id, content) {
    // if no fields to update then throw an error
    if (content.task === undefined && content.done === undefined) {
        const err = new Error("No fields to update");
            err.statusCode = 400;
        throw err;  
    }
    // extract the varianles and assign null to them so that SQl can ignore
    const task = content.task ?? null;
    const done = content.done ?? null;
    // update in the db
    return await ToDoRepo.updateToDo(id, task, done);
}

async function DeleteToDoService(id) {
    return await ToDoRepo.deleteToDo(id);
}

export default {
    allToDos,
    getToDoByIdService,
    createToDoService,
    updateToDo,
    DeleteToDoService
};