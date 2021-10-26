
import mongoose from 'mongoose'

const taskSchema = mongoose.Schema({
    id: {
        type: Number,
        unique: true
    },
    task: {
        type: String
    },
    complete: {
        type: Boolean
    }
})

const Task = mongoose.model('Tasks', taskSchema)

export default Task