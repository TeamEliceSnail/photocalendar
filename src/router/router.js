const express = require('express');
const router = express.Router();
const ctrl = require('./ctrl');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const util = require('util');
const fs = require('fs');
const { uploadFile, getFileStream } = require('../../s3');
const unlinkFile = util.promisify(fs.unlink)
const {verifyToken} = require("./authorization");

router.get("/home/:d",verifyToken,ctrl.output.home);
   
router.get("/login/:id", verifyToken,ctrl.output.login);


router.get('/login/:id', verifyToken, ctrl.output.login);


router.get("/like/:pageNumber", verifyToken, ctrl.output.like);
router.post("/like",verifyToken,ctrl.output.likePost); 
router.get("/auth/kakao/callback", ctrl.output.kakao); 
 
//router.post("/refresh",ctrl.output.tokenRefresh)

router.get("/user/:date", verifyToken, ctrl.output.detailGet); 
  
router.post("/detailPost", verifyToken, ctrl.output.detailPost);


router.get('/user/:jwtValue/date/:date', verifyToken, ctrl.output.detailGet);

router.post('/detailPost', verifyToken, ctrl.output.detailPost);

router.delete('/detail/:post_id', verifyToken, ctrl.output.detailDelete);

router.put('/detailUpdate/:post_id', verifyToken, ctrl.output.detailUpdate);

router.post('/sendImg', upload.single('image'), async (req, res) => {
    const file = req.file;
    console.log(file);
    try {
        const result = await uploadFile(file);
        await unlinkFile(file.path);
        console.log(result);
        const description = req.body.description;
        res.json({
            url: result.Location,
        });
    } catch (err) {
        console.log(err);
        res.status(401).json({
            error: '올바르지 않은 파일형식입니다. 확인해주세요.',
        });
    }
});

router.get('/images/:key', (req, res) => {
    const key = req.params.key;
    const readStream = getFileStream(key);
    readStream.pipe(res);
});

//------------------이미지업로드 테스트케이스--------------------


module.exports = router;
