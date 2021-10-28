require("dotenv").config();
const express = require("express");
const router = require("./back/router.js")
const cors = require("cors")
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("front"))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:null,
}))
app.use(router);

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});

