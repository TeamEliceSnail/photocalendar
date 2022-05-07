const { article } = require("../../db");

// article.insertMany({id_token:"dfd",articleList:[{data:"20220505",imgUrl:"https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd6ebe2bd-7112-48cb-9263-f4f6fa19eddf%2F250F764250E2616A28.jpeg?table=block&id=98f12356-bd08-4920-9289-faf033e5aaf2&spaceId=3c47c5dc-57b2-4650-8134-7a627f04552f&width=2000&userId=af17e12c-b75e-477f-aacb-2aabaf421d79&cache=v2",title:"Big제목",content:"어떠한내용내용",like:false}]})
// console.log()



const output={
    home: (req, res) =>{
        res.send(article.findOne({id_token:"ddd"},function(err,data){
            if(err){
                console.log(err)
            }else{
                console.log(data)
            }
        }));
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

