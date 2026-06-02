import pool from "../db/index.js";

// function to delete a todo
async function deleteToDo(id) {
    const query = "DELETE FROM todos WHERE id=$1";
    const result = await pool.query(query, [id]);
    // checking ID actually exists or not 
    if (result.rowCount == 0) {
        const err = new Error("Todo not found in db");
        err.statusCode = 404;
        throw err;
    }
}

async function findAllTodos() {
    const query = "SELECT * FROM todos";
    const result = await pool.query(query);
    return result.rows; 
}

async function fetchById(id) {
    const values = [id];
    const query = "SELECT * FROM todos WHERE id = $1";
    const result = await pool.query(query, values);
    // check the row count
    if (result.rowCount == 0) {
        const err = new Error("Todo not found in db");
        err.statusCode = 404;
        throw err;
    }
    // return the todo
    return result.rows[0];
}

async function createTodo(task) {
    // create a new todo in the database
    const values = [task, false];
    const query = "INSERT INTO todos (task, done) VALUES ($1, $2)";
    await pool.query(query, values);
    // return the todo
    return {
        task,
        done: false
    };
}

async function updateToDo(id , task, done) {
    // SQL expects null for coalscse to work
    const values = [task, done, id];
    const query = "UPDATE todos SET task = COALESCE($1, task), done = COALESCE($2, done) WHERE id = $3 RETURNING *";
    const result = await pool.query(query, values);
    // check the row count
    if (result.rowCount == 0) {
        const err = new Error("Todo not found in db");
        err.statusCode = 404;
        throw err;
    }
    // return the updated object
    return result.rows[0];
}

export default {
    findAllTodos,
    fetchById,
    createTodo,
    updateToDo,
    deleteToDo
};