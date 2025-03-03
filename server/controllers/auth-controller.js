const db = require("../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = (req, res) => {
    // Check existing user
    const q = "SELECT * FROM users WHERE email=? OR username=?";  
    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(409).json("User already exists!");
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const q = "INSERT INTO users(`username`, `email`, `password`) VALUES (?, ?, ?)";
        const values = [req.body.username, req.body.email, hash];
        db.query(q, values, (err, data) => {
            if (err) return res.json(err);
            return res.status(200).json("User registered successfully!");
        });
    });
};
const login = (req, res) => {
// check if user exixst 
const q ="SELECT * FROM users WHERE email=?"
db.query(q,[req.body.email], (err,data) =>{
   if (err) return res.json(err); 
   if (data.length === 0) return res.status(404).json("User not found!");
//    check if password matches
const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
if(!isPasswordCorrect) return res.status(400).json("Wrong email or password!")
const {password, ...other} =data[0];
const token = jwt.sign({id:data[0].id}, "jwtkey");
res.cookie("access_token", token , {
    httpOnly:true
}).status(200).json(data[0])
});
};
const logout = (req, res) => {
    res.clearCookie("acess_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("You have been loged out.")
};
module.exports = { register, login, logout };
