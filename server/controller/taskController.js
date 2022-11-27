
import Task from '../models/taskModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getTasks = asyncHandler(async(req, res) => {
    const tasks = await Task.find({})
    res.json(tasks)
})

//getUserById function to retrieve user by id
export const getTaskById  = asyncHandler(async(req, res) => {
    const task = await Task.find({id: req.params.id})

    //if user id match param id send user else throw error
    if(task){
        res.json(task)
    }else{
        res.status(404).json({message: "Task not found"})
        res.status(404)
        throw new Error('User not found')
    }
})


export const deleteTask = asyncHandler(async(req, res) => {

    Task.findByIdAndRemove({id: req.params.id})
        .then(data => {
            if(!data) {
                res.status(404).send({
                    message: "Task not found"
                });
            }else {
                res.send({
                    message: "Task Deleted!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error could not delete "
            })
        })
    
})

