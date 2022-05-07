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
    detail: (req,res)=>{
        const inputDate = req.params.date;
        const inputId = req.params.idToken
        datetag = new Date(inputDate);
        article.find({id_token: inputId, date: datetag}, (err, data)=>{
            if(err){
                console.log(err)
            }
            else{
                res.json(data);
            }
        })
    },
    detailPost: (req, res)=>{
        const { id_token, date, title, content, imgurl, like } = req.body;
        var atc = new article({id_token, date, title, content, imgurl, like});
        atc.save()
        .then(newPost =>{
            console.log("create 완료!")
            res.json({
                message: "Create Success!",
                data: {
                    post: newPost
                }
            })
        })
    },
    detailDel: (req, res, next)=>{
        const post_id = req.params.post_id; //_id로 삭제할겁니다. 고유값이니까
        article
            .deleteOne({ _id: post_id })
            .then(output=>{
                if(output.n == 0)
                    return res.status(404).json({ message: "post not found"});
                console.log("Delete 완료");
                res.status(200).json({
                    message: "Delete Success"
                });
            })
            .catch(err=>{
                res.status(500).json({
                    message:err
                })
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

