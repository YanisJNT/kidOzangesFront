require("dotenv").config();
const express = require("express");
const router = require("./back/router.js")

const app = express();

const PORT = process.env.PORT || 3000;

const HOST = process.env.HOST

app.use(express.static("build"))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

app.listen(PORT, HOST, () => {
    console.log(`App listening on ${PORT}`);
});

