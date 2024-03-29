import mongoose from 'mongoose'
import Task from '../models/taskModel.js'

const connectDB = async () => {
    try {
        //database Name
        const databaseName='toDo';
        const con = await mongoose.connect(`mongodb://127.0.0.1/${databaseName}`, { 

    });
        console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB