const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl");
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const util = require('util');
const fs = require('fs');
const { uploadFile, getFileStream } = require('../../s3');
const unlinkFile = util.promisify(fs.unlink)


router.get("/:d", ctrl.output.home);

router.get("/login/:id", ctrl.output.login);

router.get("/login", ctrl.output.login);

router.get("/like",ctrl.output.like);

router.get("/auth/kakao/callback",ctrl.output.kakao)





//----디테일페이지----
router.get("/user/:idToken/date/:date", ctrl.output.detailGet);

router.post("/detailPost", ctrl.output.detailPost);

router.delete("/detailDel/:post_id", ctrl.output.detailDelete);

router.put("/detailUpdate/:post_id", ctrl.output.detailUpdate);
//---디테일페이지---


//----이미지업로드---
router.post('/sendImg', upload.single('image'),async(req, res)=>{
    const file = req.file
    console.log(file);
    const result = await uploadFile(file)
    await unlinkFile(file.path);
    console.log(result)
    const description = req.body.description;
    res.status(200).json({
        message: "Update success",
        data:{
            url: result.Location
        }
    })
})




module.exports = router;