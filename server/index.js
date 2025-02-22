const express = require("express");
const cors = require('cors');
const postRoute = require("./routes/posts");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const cookieParser = require("cookie-parser");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());  

const storage = multer.diskStorage({
   destination: function (req, file, cb) {
      cb(null, '../client/public/upload');
   },
   filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
   }
});

const upload = multer({ storage });

app.post('/api/upload', upload.single('file'), function (req, res) {  
   const file = req.file;
   res.status(200).json({ filename: file.filename }); 
});

app.use("/api/posts", postRoute);
app.use("/api/user", usersRoute);
app.use("/api/auth", authRoute);

app.listen(5000, () => {
   console.log("Connected");
});
