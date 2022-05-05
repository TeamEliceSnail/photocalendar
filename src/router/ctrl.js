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
}

module.exports={
    output,
}


mainPage.findOne({ date: "20220426"}, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Result : ", docs);
    }
});