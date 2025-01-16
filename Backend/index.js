
import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors"
//By using type: module in pkg.json

const app = express()

app.use(cors())
app.use(express.json())

dotenv.config() //Pehl likha jaaye env file se kuch bhi lene k liye

const PORT = process.env.PORT || 4000
const MONGO_DB=process.env.MONGO_DB

try {
    mongoose.connect(MONGO_DB)
    console.log('Connected to MongoDB')
} catch (error) {
    console.log("error",error)
}

app.use("/book",bookRoute)
app.use("/user",userRoute)

app.listen(PORT,()=>{console.log("Running on PORT",PORT)})
