const express = require("express");
const router = express.Router();
const ctrl = require("./ctrl");
const { uploadFile } = require('../../s3');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});





router.get("/", ctrl.output.home);


router.get("/images", (req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title></title>
    </head>
    <body>
        <form action="/sendImg" method="post" enctype="multipart/form-data">
            <input type="file" name='image' placeholder="Select file"/>
            <br/>
            <button>Upload</button>
        </form>
    </body>
    </html>`);
})

router.post('/sendImg', upload.single('image'), async(req, res)=>{
    const file = req.file
    console.log(file);
    const result = await uploadFile(file)
    console.log(result)
    const description = req.body.description;
    res.send("해냈다 해냈어");
})
// router.get("/login", ctrl.output.login);

// router.post("/login", "보안 미들웨어", ctrl.output.home);

// router.get("/home", "보안 미들웨어", ctrl.output.home);

// router.post("/input", "보안 미들웨어", ctrl.output.detail);

// router.get("/detail", "보안 미들웨어",ctrl.output.detail)

// router.post("/detail", "보안 미들웨어", ctrl.output.detail)

// router.get("/profile", "보안 미들웨어", ctrl.output.profile)

// router.post("/profile", "보안 미들웨어", ctrl.output.profile);

module.exports = router;