const express = require("express");
const fs = require("fs");
const router = express.Router();

router.get("/", (req, res, next) => {
    fs.readFile("message.txt", (e, data) => {
        if (e) {
            console.log(e);
        }
        res.send(
            `${data}<form action="/"  method= "POST" onSubmit="document.getElementById('username').value=localStorage.getItem('username')">
                    <input type="text" name="message" id="message" placeholder="message">
                    <input type = "hidden" name = "username" id="username">
                    <br />
                    <button type ="submit">Send</button>
                </form>`
        );
    });
});

router.post("/", (req, res, next) => {
    const { username, message } = req.body;
    const data = `${username}: ${message}`;

    fs.appendFile("message.txt", data, (e) => {
        if (e) {
            console.log(e);
        } else {
            res.redirect("/");
        }
    });
});

router.get("/login", (req, res, next) => {
    res.send(
        `
        <form action="/" method="POST" onsubmit="localStorage.setItem('username', document.getElementById('username').value)">

	    <input id="username" type="text" name="username" placeholder="username">
        <br />
	    <button type="submit">Login</button>

        </form>`
    );
});

module.exports = router;
