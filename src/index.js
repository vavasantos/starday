const express = require("express");
const app = express();
var porta = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const path = require("path");
const flash = require("flash");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded);
