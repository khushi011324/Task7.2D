
const express = require("express");
const cors = require("cors")
const {connection} = require("./db");
const { questionRouter } = require("./routes/question.route");
const { articleRouter } = require("./routes/article.route");
const multer = require("multer");
const path = require("path");
require("dotenv").config()

const app = express()
app.use(cors())
app.use(express.json());

app.use("/question",questionRouter);
app.use("/article",articleRouter);




app.listen(process.env.PORT, async()=>{
try {
    await connection
    console.log(`Connected to db port ${process.env.PORT}`)
} catch (error) {
    console.log("Not connected to db")
}
})
