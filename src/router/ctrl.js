const output={
    home: (req, res) =>{
        res.render("인덱스페이지");
    },
    login: (req,res)=>{
        res.render("로그인 페이지");
    },
    input: (req, res)=>{
        res.render("/detail page");
    },
    detail: (req,res)=>{
        res.render("/detail page");
    },
    profile: (req,res)=>{
        res.render("/profile page");
    },
}

module.exports={
    output,
}