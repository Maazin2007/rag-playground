/* This file contains the error codes and messages for the database */
const errors = {
    "23505": { status: 409, message: "Duplicate value not allowed" },
    "23502": { status: 400, message: "Missing required field" },
    "23503": { status: 400, message: "Invalid reference" },
    "22P02": { status: 400, message: "Invalid input format" },
};

export default errors;