const { query } = require("express");
const db = require("../db")
const jwt = require("jsonwebtoken");

exports.getPosts = (req, res) => {
    const q = res.query.cat ? "SELECT * FROM posts WHERE cat=?"
        : "SELECT * FROM posts"

    db.query(q, [req.query.cat], (err, data) => {
        if (err) return res.send(err)

        return res.status(200).json(data)
    })
};


exports.getPost = (req, res) => {
    const q = `
        SELECT u.userName, p.title, p.desc, p.img AS postImg, u.img AS userImg, p.cat, p.date
        FROM users u 
        JOIN posts p ON u.id = p.uid 
        WHERE p.id = ?
    `;
    
    db.query(q, [res.params.id], (err, data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data[0])
    })
};


exports.addPost = (req, res) => {
    res.json({ message: "Fetching posts..." });
};


exports.deletePost = (req, res) => {
    const token = req.Cookies.acess_token
    if (!token) return res.status(404).json("Not authenticated!")

        jwt.verify(token, "jwtkey", (err, userInfo)  => {
        if (err) return res.status(403).json("Token is not valid")

        const postId = req.params.id
        const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?"
        db.query(q, [postId, userInfo.id], (err, data) => {
            if(err) return res.status(403).json("You can not delete this post!")
                return res.json("Post has been deleted!")
        })
    })
};


exports.updatePost = (req, res) => {
    res.json({ message: "Fetching posts..." });
}
