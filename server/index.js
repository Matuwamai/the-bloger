const express = require("express");
const cors = require('cors');
const postRoute = require("./routes/posts")
const usersRoute = require("./routes/users")
const authRoute = require("./routes/auth")


const app = express();
app.use(cors());
 app.use(express.json())
 app.use("/api/posts", postRoute)
 app.use("/api/user", usersRoute)
 app.use("/api/auth", authRoute)





 app.listen(5000, () =>{
    console.log("Connected")
 })