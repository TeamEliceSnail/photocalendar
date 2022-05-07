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

