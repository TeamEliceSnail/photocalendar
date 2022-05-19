const { article, users } = require('../db');
const express = require('express');
const app = express();
const axios = require('axios');
const qs = require('qs');
const jwt = require('jsonwebtoken');
const kakaoClientID = '904d1d2aa96e5c26e05b03905933ef87';
const kakaoClientSecret = 'rzK8inmejYty3s16HLr8QuuExuUqsP0H';
const YOUR_SECRET_KEY = process.env.JWT_SECRET;
const redirectUri = 'http://localhost:5030/auth/kakao/callback';
const cookieParser = require('cookie-parser');
const { jwtdecode } = require('./decode');

app.use(cookieParser());

let now = Date.now();

const output = {
    home: (req, res) => {
        let date = req.params.date;
        let decodeValue = jwtdecode(req.cookies.user);
        let d1 = 0;
        if (Number(date[date.length - 1]) === 1) {
            d1 = 12;
        } else {
            d1 = Number(date[date.length - 1]) + 1;
        }
        const start = new Date(date);
        const end = new Date(date.slice(0, 4) + '-' + d1.toString());
        article.find(
            { id_token: decodeValue.id_token, date: { $gte: start, $lt: end } },
            function (err, data) {
                if (err) {
                    console.log(err);
                } else {
                    res.json(data);
                }
            }
        );
    },
    kakao: async (req, res) => {
        let token, user;
        try {
            token = await axios({
                method: 'POST',
                url: 'https://kauth.kakao.com/oauth/token',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                },
                data: qs.stringify({
                    grant_type: 'authorization_code',
                    client_id: kakaoClientID,
                    client_secret: kakaoClientSecret,
                    redirectUri: redirectUri,
                    code: req.query.code,
                }),
            });
        } catch (err) {
            res.json(err.data);
        }
        try {
            user = await axios({
                method: 'GET',
                url: 'https://kapi.kakao.com/v2/user/me',
                headers: {
                    Authorization: `Bearer ${token.data.access_token}`,
                },
            });
        } catch (err) {
            res.json(err.data);
        }

        users
            .findOne({ id_token: user.data.id })
            .exec()
            .then((data) => {
                if (data) {
                    console.log(data);
                    
                } else {
                    console.log(
                        `해당 유저는 없습니다.${user.data.id}님에 대한 유저 생성 시작`
                    );
                    let atc = new users({
                        id_token: user.data.id,
                        nickname: user.data.properties.nickname,
                        email: user.data.kakao_account.email,
                        refresh_token: token.data.refresh_token,
                    });
                    atc.save().then((newUser) => {
                        console.log('create 완료!');
                    });
                }
            });

        const jwttoken = jwt.sign(
            {
                id_token: user.data.id,
                nickname: user.data.properties.nickname,
                profile_image: user.data.properties.profile_image,
                thumbnail_image: user.data.properties.thumbnail_image,
                email: user.data.kakao_account.email,
            },
            process.env.JWT_SECRET,
            {
                issuer: 'snail',
                expiresIn: '120m',
            }
        );
        res.cookie('user', jwttoken);
        res.redirect('http://localhost:3000');
    },
    auth: (req, res, next) => {
        const clientToken = req.cookies.user;
        if (clientToken){
            try {
                const decoded = jwt.verify(clientToken, YOUR_SECRET_KEY);
                if (decoded) {
                    res.locals.userId = decoded.user_id;
                    res.send('Authorized');
                } else {
                    res.send('Unauthorized');
                }
            } catch (err) {
                res.send(err.name);
            }
        }
        else{
            return res.send('TokenUndefined');
        }
    },
    login: (req, res, next) => {
        res.json('mainpagedata');
        console.log(typeof req.params.id);
        next();
    },
    input: (req, res) => {
        res.send('/detail page');
    },

    like: (req, res) => {
        let decodeValue = jwtdecode(req.cookies.user);
        const date = new Date(req.params.date);
        let page = req.params.pageNumber;
        article
            .find(
                {
                    date: { $lte: date },
                    id_token: decodeValue.id_token,
                    like: true,
                },
                (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(data);
                    }
                }
            )
            .sort({ date: -1 })
            .skip((page - 1) * 15)
            .limit(15);
    },
    likePost: (req, res) => {
        const { _id, like } = req.body;
        article.updateOne(
            { _id: _id },
            { $set: { like: like } },
            (err, data) => {
                if (err) {
                    console.log(err);
                    res.json({ error: 'like 수정을 실패했습니다.' });
                } else {
                    res.json({ succes: `like를 수정하였습니다.` });
                }
            }
        );
    },

    detailGet: (req, res) => {
        const selectedDate = req.params.date;
        const nextDate = (parseInt(selectedDate) + 1).toString();
        const fixedDate = `${selectedDate.slice(0, 4)}-${selectedDate.slice(4, 6)}-${selectedDate.slice(6, 8)}`
        const fixedNext = `${nextDate.slice(0, 4)}-${nextDate.slice(4, 6)}-${nextDate.slice(6, 8)}`

        datetag = new Date(fixedDate);
        dateend = new Date(fixedNext);
        
        const decodeValue = jwtdecode(req.cookies.user);
        
        article.find({
            id_token: decodeValue.id_token, 
            date: { $gte: datetag, $lt: dateend }
            }, (err, data) => {
                if (err) { res.json(err) } 
                else { res.json(data) }
            });
    },
    detailPost: (req, res) => {
        const { date, title, content, imgurl, like } = req.body;
        const parsedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6, 8)}`
        const datetag = new Date(parsedDate);
        const decodeValue = jwtdecode(req.cookies.user);
        let newArticle = new article({
            id_token: decodeValue.id_token,
            date: datetag,
            title: title,
            content : content,
            imgurl : imgurl,
            like : like,
        });

        newArticle.save().then((newPost) => {
            res.json( {data: { post: newPost },} );
        });
    },

    detailDelete: async (req, res) => {
        const post_id = req.params.post_id;
        article
            .deleteOne( { _id: post_id } )
            .then((output) => {
                if (output.n == 0)
                    return res.status(404).json({ message: 'post not found' });
                res.status(200).json({
                    message: 'Delete Success',
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message: err,
                });
            });
    },

    detailUpdate: async (req, res) => {
        const post_id = req.params.post_id;
        const { title, content, like, imgurl } = req.body;
        try {
            let post = await article.findById(post_id);
            if(post){
                post.title = title;
                post.content = content;
                post.like = like;
                post.imgurl = imgurl
                var updatedPost = await post.save();
                res.status(200).json({
                    message: '업데이트 완료!',
                    data: { post: updatedPost }
                });
            } else {
                return res.status(404).json({ message: '해당 글이 없습니다' });
            }
        } catch (err) {
            res.status(500).json({ message: err });
        }
    },
};

module.exports = {
    output,
};
