require("dotenv").config();
const express = require("express");
const router = require("./back/router.js");
const cors = require("cors");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const HOST = process.env.HOST

app.use(express.static(path.resolve(__dirname, "/front/build")))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin: "https://kidozanges.herokuapp.com"
}));
app.use(router);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});

