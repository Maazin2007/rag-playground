import pool from "../db/index.js";

async function createChunk(content, source, author, embedding) {
    const values = [content, source, author, JSON.stringify(embedding)];
    const query = "INSERT INTO chunks (content, source, author, embedding) VALUES ($1, $2, $3, $4) RETURNING id";
    const result = await pool.query(query, values);
    // returning the id
    return result.rows[0].id;
}

// function to get the most relevant chuncks
async function relevantChunks(contentEmbedded) {
    const values = [JSON.stringify(contentEmbedded)];
    const query = "SELECT content, source, author, 1 - (embedding <=> $1::vector) AS similarity FROM chunks ORDER BY similarity DESC LIMIT 6";
    const result = await pool.query(query, values);
    // store all of the chuncks
    return result.rows;
}

export default { createChunk, relevantChunks };

