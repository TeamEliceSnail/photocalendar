const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl");
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const util = require('util');
const fs = require('fs');
const { uploadFile, getFileStream } = require('../../s3');
const unlinkFile = util.promisify(fs.unlink)


router.get("/", ctrl.output.home);

router.get("/login/:id", ctrl.output.login);

router.get("/login", ctrl.output.login);

router.get("/like",ctrl.output.like);

router.get("/user/:idToken/date/:date", ctrl.output.detail);

router.post("/detailPost", ctrl.output.detailPost);

router.delete("/detail/:post_id", ctrl.output.detailDel);



//이미지업로드 테스트케이스
router.get("/images", ctrl.output.uploadImg)

router.post('/sendImg', upload.single('image'),async(req, res)=>{
    const file = req.file
    console.log(file);
    const result = await uploadFile(file)
    await unlinkFile(file.path);
    console.log(result)
    const description = req.body.description;
    res.send({imagePath: `/images/${result.Key}`});
})

router.get('/images/:key', (req,res)=>{
    const key = req.params.key
    const readStream = getFileStream(key);
    readStream.pipe(res)
})

//------------------이미지업로드 테스트케이스--------------------


module.exports = router;