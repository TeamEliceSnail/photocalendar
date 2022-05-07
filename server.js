require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const react = require("react");
const cors = require('cors')
const { article } = require("./db");
const { uploadFile } = require('./s3');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const bodyParser = require('body-parser');

app.listen(process.env.PORT, ()=>{
    console.log(`${process.env.PORT}포트로 서버가 가동되었습니다`);
})

app.use(bodyParser.json());
app.post('/images', upload.single('image'), async(req, res)=>{
    const file = req.file
    console.log(file);
    const result = await uploadFile(file)
    console.log(result)
    const description = req.body.description;
    res.send("해냈다 해냈어");
})

const home = require("./src/router/router");


app.set("views", "./src/pages");
app.set("view engine", "react");
app.engine("html", require("ejs").renderFile);

app.use(cors());



mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    dbName: "photocalendar"
    })
    .then(()=> console.log("성공적으로 db에 연결됐습니다"))
    .catch((err)=> console.log(err));



var now = new Date();

app.use("/", home);



