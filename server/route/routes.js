import express from 'express'
import { getIssues, addIssues, editIssuesById, getIssuesById, deleteIssuesById } from '../controller/issueController.js'
const route = express.Router()
route.get('/', getIssues)
route.post('/addIssues', addIssues)
route.get('/:id', getIssuesById)
route.put('/:id', editIssuesById)
route.delete('/:id', deleteIssuesById)
export default route