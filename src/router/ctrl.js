const { article } = require("../../db");

// article.insertMany([{
//     id_token:'aaa',
//     date: new Date(2022,3,1,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/053aa6171b0c65328586ee6fc9e7dd47',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,1,12,30),
//     title: '두번째',
//     content: '두번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/11ef05ca5c4805df041fe50b052d775a',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,1,12,30),
//     title: '세번째',
//     content: '세번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/1b04ba6ed84c211d861ea49717c0cadc',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,2,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/2e3472a03978eae3a37d1a2af23f0347',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,2,12,30),
//     title: '두번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/379d2d952a08dea7fe076e85c64b5c2a',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,3,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/3e46574234ce40cfb5730df74ba87831',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,4,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/41c3621d987d03e609d2247ddc02cf82',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,5,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/41d2bec6c78eebb239f763701c521f47',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,6,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/4f650352f21fcb93ec97cd2112717644',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,7,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/5be53bbf145f4cbd8d90cb900b58a7b3',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,8,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/60928fc2faf9ccf21e0ecc980e782a66',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,9,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/80eee05760eee70ed016adffcd2976eb',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,10,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/90f1f3985f960467ed7628a134a3522e',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,11,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/963a1c66e66bba4dabeeaad6ea12f614',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,12,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/976fa57e29e40fe6f9b8c64fe17347ab',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,13,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'ttps://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/9c399fdb7ca2e6251669cf320f0dc2a8',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,14,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/a49207c605b6c00eb1eaa2b89725f3e2',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,15,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/a4c3435a65fd0377d457d6ef1719665e',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,16,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/053aa6171b0c65328586ee6fc9e7dd47',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,17,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/abd5ce04262b0150464933067be3f8c8',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,18,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/aef9f0b46a5e378600da1ad2a6098cf3',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,19,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/afbf6d3855c7c37508d42caaeeaad48b',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,20,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/b4cefb1ac8a2697dc7ad85977ee5a1c6',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,21,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/b4d9659d2296f7721a378eef4768dbc5',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,22,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/bb72a2111701a659b74f50d44534b20f',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,23,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/c0e6f68e6e9ce56098233cd8ee1e520a',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,24,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/d7338f7515a44941336cf42c4b3810d6',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,25,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/dc858180fd93098fedcbfb841b2a52e6',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,26,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/dec84ac9d84c53fcbb15c9af45a1a9ad',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,27,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/e242fdc2a004c4501b2f12f6ef12b45b',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,28,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/e47993f4c2859c547be68e67c8fd720d',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,29,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/f2737f6177867e4adc8b00e1b6c80c63',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,3,30,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/e4d8383d41ba6c9eabd72aae5bd3e422',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,4,1,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/f9c260f147037bebb2a823771ee5546d',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,4,2,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/2345db0a9c8aea3a1fe3c724d423882a',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,4,3,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/38051817e1127caf399ad74b2b99483f',
//     like: true,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,4,4,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/5b0528cbbd9dfb8b29c017a81e5ae8f4',
//     like: false,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,4,5,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/06cc7e6bc79aa3dc3417aa6002ef20ae',
//     like: false,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,4,6,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/b772ce9c24e2cf6b740af6494dd3e142',
//     like: false,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,4,7,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/2e00352be3ea91f8af7bd970a93d8190',
//     like: false,
// },
// {
//     id_token:'aaa',
//     date: new Date(2022,4,8,12,30),
//     title: '첫번째',
//     content: '첫번째 내용입니다잉',
//     imgurl: 'https://team-elice-snail-photocalendar.s3.ap-northeast-2.amazonaws.com/464baaa8a0fab2b2461bd21725a83dee',
//     like: false,
// }])

let now = Date.now();


const output={
    home: (req, res) =>{
        article.find({like:false},function(err,data){
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

