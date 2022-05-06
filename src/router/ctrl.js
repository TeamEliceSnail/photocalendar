const { mainPage } = require("../../db");

const output={
    home: (req, res) =>{
        res.send("Hello");
    },
    login: (req,res)=>{
        res.json("mainpagedata");
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
    
    },
}




module.exports={
    output,
}

