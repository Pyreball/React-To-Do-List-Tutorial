import { getTasks, getTaskById } from "../controller/taskController.js";
import express from 'express'


const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getTasks)

// express router method to create route for getting users by id
router.route('/:id').get(getTaskById)

export default router