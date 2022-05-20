const express = require('express');
const router = express.Router();
const ctrl = require('./ctrl');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const util = require('util');
const fs = require('fs');
const { uploadFile } = require('../../s3');
const unlinkFile = util.promisify(fs.unlink);
const { verifyToken } = require('./authorization');


router.get('/auth', ctrl.output.auth);

router.get('/home/:date', verifyToken, ctrl.output.home);

router.get('/login/:id', ctrl.output.login);

router.get('/like/:date/:pageNumber', verifyToken, ctrl.output.like);

router.post('/like', verifyToken, ctrl.output.likePost);

router.get('/auth/kakao/callback', ctrl.output.kakao);

router.get('/user/:date', verifyToken, ctrl.output.detailGet);

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

module.exports = router;
