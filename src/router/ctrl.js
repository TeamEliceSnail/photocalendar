const { article } = require("../../db");
const { mainPage } = require("../../db");


let now = Date.now();

const output={
    home: (req, res) =>{
        article.find({id_token:'aaa'},function(err,data){
            if(err){
                console.log(err)
            }else{
                res.json(data);
            }
        })
    },
    login: (req,res,next)=>{
        res.json("mainpagedata");
        console.log(typeof(req.params.id))
        next()
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
    like: (req,res)=>{
        article.find({like:true},function(err,data){
            if(err){
                console.log(err)
            }else{
                res.json(data);
            }
        })
        
    }, 


    uploadImg: (req,res)=>{
        res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        <form action="/sendImg" method="post" enctype="multipart/form-data">
            <input type="file" name='image' placeholder="Select file"/>
            <br/>
            <button>Upload</button>
        </form>
    </body>
    </html>`);
    },
}




module.exports={
    output,
}

