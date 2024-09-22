import express from "express"
import dotenv from "dotenv";
import connectDB from "./db/conectionDB";
import UserRoute from "./routes/user.route"
dotenv.config()


const app = express();

const PORT = process.env.PORT || 5000;

//api
app.use("/api/v1/User", UserRoute)
app.listen(PORT, () => {
    connectDB()
   

    console.log(`Server listen at port ${PORT}`)
})


