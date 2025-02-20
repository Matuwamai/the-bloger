const { query } = require("express");
const db = require("../db")

exports.getPosts = (req, res) => {
    const q =requestAnimationFrame.query.cat ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts"

    db,query(q,[res.query.cat], (err,data)=>{
        if(err)return res.send(err)

            return res.status(200).json(data)
    })
};
exports.getPost = (req, res) => {
    res.json({ message: "Fetching posts..." });
};exports.addPost = (req, res) => {
    res.json({ message: "Fetching posts..." });
};exports.deletePost= (req, res) => {
    res.json({ message: "Fetching posts..." });
};exports.updatePost = (req, res) => {
    res.json({ message: "Fetching posts..." });}
