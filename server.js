require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const react = require("react");
const cors = require('cors')
const { article } = require("./db");



app.listen(process.env.PORT, ()=>{
    console.log(`${process.env.PORT}포트로 서버가 가동되었습니다`);
})

const home = require("./src/router/router");
const { Logger } = require("concurrently");
const logger = require('morgan')

app.set("views", "./src/pages");
app.set("view engine", "react");
app.engine("html", require("ejs").renderFile);

app.use(cors());
app.use(logger('dev'))

mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    dbName: "photocalendar"
    })
    .then(()=> console.log("성공적으로 db에 연결됐습니다"))
    .catch((err)=> console.log(err));



var now = new Date();

app.use("/", home);

