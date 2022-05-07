const { article } = require("../../db");

article.insertMany({
    id_token:'aaa',
    date: new Date(2022,3,1,12,30),
    title: '첫번째',
    content: '첫번째 내용입니다잉',
    imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/053aa6171b0c65328586ee6fc9e7dd47',
    Like: false,
})

let now = Date.now();


const output={
    home: (req, res) =>{
        article.find({articleList:[{Like:false}]},function(err,data){
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
        res.send("/profile page");
    },
}

module.exports={
    output,
}

