import RagService from "../services/RagService.js";


async function embeddingController(req, res, next) {
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
}

async function SearchController(req, res, next) {
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
}

// just the csv upload controller
async function csvUploadController(req, res, next) {
    if (req.file === undefined) {
        const err = new Error("CSV upload must include a file field named file");
        err.statusCode = 400;
        throw err;
    }

    // extract the file name from the request
    const fileName = req.file.originalname;
    // create a path to the file
    const filePath = req.file.path;
    // declare a variable to store the data
    const response = await RagService.csvUploadService(filePath);
    // send back the response
    res.status(200).json({
        status: "Success",
        message: `${response} chunks embedded and stored from ${fileName}`
    });
}

export default { embeddingController, SearchController, csvUploadController };