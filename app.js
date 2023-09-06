const express = require("express");

const app = express();
const bodyParser = require("body-parser");
const login = require("./login_form");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(login);

app.listen(3000);
