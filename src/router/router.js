const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

router.get("/", ctrl.output.home);

router.get("/login/:id", ctrl.output.login);
router.get("/login", ctrl.output.login);
router.get("/like",ctrl.output.like);


// router.post("/input", "보안 미들웨어", ctrl.output.detail);

// router.get("/detail", "보안 미들웨어",ctrl.output.detail)

// router.post("/detail", "보안 미들웨어", ctrl.output.detail)

// router.get("/profile", "보안 미들웨어", ctrl.output.profile)

// router.post("/profile", "보안 미들웨어", ctrl.output.profile);


module.exports = router;