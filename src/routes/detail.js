import express from 'express'
import DetailController from '../controller/DetailController.js';
const Router = express.Router();

Router.get('/', DetailController.index)
Router.get('/:id', DetailController.show)

export default Router; 