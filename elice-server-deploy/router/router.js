const express = require('express');
const router = express.Router();
const ctrl = require('./ctrl');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const util = require('util');
const fs = require('fs');
const { uploadFile, getFileStream } = require('../s3');
const unlinkFile = util.promisify(fs.unlink)
const {verifyToken} = require("./authorization");

router.get("/home/:d",ctrl.output.home);
   
router.get("/login/:id", ctrl.output.login);


router.get('/login/:id', ctrl.output.login);


router.get("/like/:d/:pageNumber", ctrl.output.like);
router.post("/like",ctrl.output.likePost); 
router.get("/auth/kakao/callback", ctrl.output.kakao); 
  

router.get("/user/:idToken/date/:date", ctrl.output.detailGet); 
  
router.post("/detailPost", ctrl.output.detailPost);

router.delete('/detail/:post_id',  ctrl.output.detailDelete);

router.put('/detailUpdate/:post_id',  ctrl.output.detailUpdate);

router.post('/sendImg', upload.single('image'), async (req, res) => {
    const file = req.file;
    console.log(file);
    const result = await uploadFile(file)
    await unlinkFile(file.path);
    console.log(result)
    const description = req.body.description;
    res.json({
        url: result.Location
    })
})

router.get('/images/:key', (req,res)=>{
    const key = req.params.key
    const readStream = getFileStream(key);
    readStream.pipe(res);
});

//------------------이미지업로드 테스트케이스--------------------


module.exports = router;
