import express from "express";
import dotenv from "dotenv";
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

app.use(express.json());
app.use(router);

const PORT = 3000


app.listen(PORT, () => {
    console.log("running on port", PORT)
})




