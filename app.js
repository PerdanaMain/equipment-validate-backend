import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/db.js";
import router from "./routes/auth.js";
dotenv.config();
// import users from "./models/userModel.js";
const app = express()


try {
    await db.authenticate();
    console.log('Database Connected...');
    // await users.sync();
} catch (error) {
    console.error(error);
}

app.use(cors({credentials:true, origin:'http://localhost:3000 '}));
app.use(cookieParser());
app.use(express.json());
app.use(router);

const PORT = 3000


app.listen(PORT, () => {
    console.log("running on port", PORT)
})




