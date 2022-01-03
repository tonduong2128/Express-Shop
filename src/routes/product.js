import express from 'express'

import DetailController from '../controller/DetailController.js'
import upload from '../config/uploads.js'
const Router = express.Router()



Router.get('/', DetailController.index)
Router.post('/update/:id', upload.single('image') ,DetailController.update)
Router.post('/create', upload.single('image'), DetailController.create)
Router.get('/:id', DetailController.show)

export default Router; 