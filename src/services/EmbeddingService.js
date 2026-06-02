import openAI from "openai";
import { OPENAI_KEY } from "../config/env.js";

// new instance of the OpenAI client
const openai = new openAI({ apiKey: OPENAI_KEY });

// get embedding wrapper function 
async function getEmbedding(text) {
    // api request configurations
    const config = {
        model: "text-embedding-3-small",
        input: text,
        encoding_format: "float",
    }
    // waiting for response
    try {
        const response = await openai.embeddings.create(config);
        return response.data[0].embedding;
    } catch (err) {
        const error =  new Error("Error with requesting embedding from OpenAI API");
        error.statusCode = 500;
        throw error;
    }
}

async function proccessChunk(content, question) {
    // api configurations
    const config = {
        model: "gpt-4o-mini",
        messages: [
            { 
                role: "system", 
                content: "You are a helpful assistant. Answer questions in a natural, conversational way based only on the context provided. Naturally weave in the source and author when relevant, don't just list them in brackets."
            }, 
            {
                role: "user",
                content: `Context:\n${content}\n\nQuestion: ${question}`
            }
        ]
    };

    try {
        // waiting for response
        const response = await openai.chat.completions.create(config);
        const answer = response.choices[0].message.content;
        return answer;
    } catch (err) {
        const error =  new Error("Error with requesting embedding from OpenAI API");
        error.statusCode = 500;
        throw error;
    }
}

export default { getEmbedding, proccessChunk };