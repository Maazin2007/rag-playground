import RagRepo from '../repositories/RagRepo.js';
import EmbeddingService from './EmbeddingService.js';

async function embeddingService(body) {
    // exctract all the items from the body
    const { content, source, author } = body;
    // check if each one of them exists
    if (content == undefined || source == undefined || author == undefined) {
        const err = new Error("Request object should contain content, source and author")
        err.statusCode = 400;
        throw err;
    }
    // getting the embedding for the chuck
    const embedding = await EmbeddingService.getEmbedding(content);
    // pass the data to the repository function
    const response = await RagRepo.createChunk(content, source, author, embedding);
    return response;
}

async function SearchService(body) {
    // extract the item from the body
    const { question } = body;
    // checking if question exists
    if (question === undefined) {
        const err = new Error("the request object must contain question");
        err.statusCode = 400;
        throw err;
    }
    // get embedding for the question
    const question_embedding = await EmbeddingService.getEmbedding(question);
    // sending the DB and getting the most relevant 6 chunks 
    const relevantChuncks = await RagRepo.relevantChunks(question_embedding);
    // creating a new array 
    const content = relevantChuncks.map(c => `${c.content} (source: ${c.source}, author: ${c.author})`).join("\n");
    // sending to OPENAI and storing the answer
    const answer = await EmbeddingService.proccessChunk(content, question);
    // response object
    const response = {
        answer,
        relevantChuncks
    }
    // returning response object
    return response;
}

export default { embeddingService, SearchService };