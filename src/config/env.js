import dotenv from "dotenv";
// loading the environment variables into process.env
dotenv.config();

// extract the environment variables into constants
const PORT = Number(process.env.PORT) || 8000;
const NODE_ENV = process.env.NODE_ENV || "development";
const DATABASE_URL = process.env.DATABASE_URL;
const OPENAI_KEY = process.env.OPENAI_KEY;

// checking if database url is defined
if (!DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
}

// checking if API key exists
if (!OPENAI_KEY) {
    throw new Error("OPENAI_KEY NOT DEFINED");
}

// exporting the constants
export { PORT, NODE_ENV, DATABASE_URL, OPENAI_KEY };