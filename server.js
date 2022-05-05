require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const react = require("react");
const cors = require('cors')
const { mainPage } = require("./db");

app.listen(process.env.PORT, ()=>{
    console.log(`${process.env.PORT}포트로 서버가 가동되었습니다`);
})


app.set("views", "./src/pages");
app.set("view engine", "react");
app.engine("html", require("ejs").renderFile);

mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    dbName: "photocalendar"
    })
    .then(()=> console.log("성공적으로 db에 연결됐습니다"))
    .catch((err)=> console.log(err));

var now = new Date();
app.get('/', (req, res)=>{ 
    res.send("hello");
});

//insert test

    // const mainP = new mainPage({
    //     date: '20220426',
    //       photoUrl: '테스트이미지주소',
    //       title: '제목',
    //       content:'내용',
    //       dateTag: {
    //           month: 4,
    //           day : 26
    //       },
    //       bookmark: true,
    // } );
    //     mainP.save()
    //     .then(()=>{
    //         console.log('데이터 삽입 성공')
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
        



//Proxy, axios 공부해오기