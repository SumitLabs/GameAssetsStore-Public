import express from "express";
import dotenv from "dotenv";
import connectionDB from "./database/connectionDB.js";
import asset from './routes/asset/assetRoutes.js'
import user from './routes/user/user.js'
const app = express();
dotenv.config();

const port = process.env.PORT||4000;

//Middleware

app.use(express.json())
   
// Route
app.use("/api/v1",asset)

app.use("/api/v1",user)

app.listen(port, async () => {
  await connectionDB();
  console.log(`Example app listening on port ${port}`);
});
