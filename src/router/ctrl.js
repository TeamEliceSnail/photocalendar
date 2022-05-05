const mongoose = require("../../server.js");

if(mongoose){
    console.log("연결성공!");
}


const output={
    home: (req, res) =>{
        res.send("Hello");
    },
    login: (req,res)=>{
        res.json("로그인 페이지");
    },
    input: (req, res)=>{
        res.send("/detail page");
    },
    detail: (req,res)=>{
        res.send("/detail page");
    },
    profile: (req,res)=>{
        res.send("/profile page");
    },
}

module.exports={
    output,
}