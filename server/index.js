import connectDB from './config/db.js'
import router from './routes/taskRoute.js'
import express from 'express'
import dotenv from 'dotenv'

console.log(connectDB())

dotenv.config()


const app = express();
app.use('/api/task', router)

const PORT = process.env.PORT || 5000

app.get("/api", (req, res) => {
    res.json({message: "Hello from Server!"});
})
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
/**app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
}); **/

