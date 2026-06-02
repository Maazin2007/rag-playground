import RagService from "../services/RagService.js";

async function embeddingController(req, res, next) {
    try {
        // extract the req object 
        const { body } = req;
        // send it to the service
        const response = await RagService.embeddingService(body);
        // create return data object
        const data = { id: response};
        // send response
        res.status(200).json({
            status: "Success",
            message: "Succefully added chunk to database",
            data
        });
    } catch(err) {
        // throw error and send it the error middleware
        next(err);
    }
}

async function SearchController(req, res, next) {
    try {
        // extract the body
        const { body } = req;
        // send it to the service function
        const response = await RagService.SearchService(body);
        // send back the response
        res.status(200).json({
            status: "Success",
            message: "Successfully Answered Question",
            data: response
        });
    } catch (err) {
        // throw error and send it to the middleware
        next(err);
    }
}

export default { embeddingController, SearchController };