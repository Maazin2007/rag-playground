import express from 'express';
import RagController from '../controllers/RagController.js';
import csvUploadMiddleware from '../middleware/csvUploadMiddleware.js';

// creating ragRouter instance
const RagRouter = express.Router();

// routes
RagRouter.post('/embed', RagController.embeddingController);
RagRouter.post('/search', RagController.SearchController);
RagRouter.post('/csv-upload', csvUploadMiddleware, RagController.csvUploadController);
// exporting the router
export default RagRouter;