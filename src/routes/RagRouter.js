import express from 'express';
import RagController from '../controllers/RagController.js';

// creating ragRouter instance
const RagRouter = express.Router();

// routes
RagRouter.post('/embed', RagController.embeddingController);
RagRouter.post('/search', RagController.SearchController)
// exporting the router
export default RagRouter;