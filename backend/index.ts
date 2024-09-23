import express from "express"
import dotenv from "dotenv";
import connectDB from "./db/conectionDB";
import UserRoute from "./routes/user.route"
import cookieParser from "cookie-parser";
import bodyParser from "body-parser"
import cors from "cors"

dotenv.config()



const app = express();

const PORT = process.env.PORT || 5000;

//default middleware for any mern project
app.use(bodyParser.json({limit:'10mb'}))
app.use(express.urlencoded({extended:true, limit:'10mb'}));
app.use(express.json())
app.use(cookieParser())

const corsOptions = {
    origin:"http://localhost:5173",
    Credential:true
}
app.use(cors(corsOptions))

//api
app.use("/api/v1/User", UserRoute)
app.listen(PORT, () => {
    connectDB()
   

    console.log(`Server listen at port ${PORT}`)
})
