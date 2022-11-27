import { getTasks, getTaskById, deleteTask } from "../controller/taskController.js";
import express from 'express'



const router = express.Router()


// express router method to create route for getting all users
router.route('/').get(getTasks)

// express router method to create route for getting users by id
router.route('/:id').get(getTaskById)

// express router method to delete taks
router.route('/:id').delete(deleteTask)

export default router