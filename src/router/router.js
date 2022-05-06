const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl");
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const util = require('util');
const fs = require('fs');
const { uploadFile, getFileStream } = require('../../s3');
const unlinkFile = util.promisify(fs.unlink)


// uploadImg: (req,res)=>{
//     res.send(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title></title>
// </head>
// <body>
//     <form action="/sendImg" method="post" enctype="multipart/form-data">
//         <input type="file" name='image' placeholder="Select file"/>
//         <br/>
//         <button>Upload</button>
//     </form>
// </body>
// </html>`);


router.get("/", ctrl.output.home);




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




// router.get("/login", ctrl.output.login);

// router.post("/login", "보안 미들웨어", ctrl.output.home);

// router.get("/home", "보안 미들웨어", ctrl.output.home);

// router.post("/input", "보안 미들웨어", ctrl.output.detail);

// router.get("/detail", "보안 미들웨어",ctrl.output.detail)

// router.post("/detail", "보안 미들웨어", ctrl.output.detail)

// router.get("/profile", "보안 미들웨어", ctrl.output.profile)

// router.post("/profile", "보안 미들웨어", ctrl.output.profile);

module.exports = router;