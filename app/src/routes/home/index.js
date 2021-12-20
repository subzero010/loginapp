"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");//home.ctrl.js에서 module.exports 한걸 받아오는 부분 

router.get("/", ctrl.home);// controller(home.ctrl.js)에 home 함수를 만들어서 사용 .. 백앤드맛보기6강
// router.get("/", (req, res)=>{ 
//     res.render("home/index"); // <-- 이부분이 ctonroller라고 생각하면됨 ..home.ctrl.js에 구현 
// });

router.get("/login", ctrl.login);// controller(home.ctrl.js)에 login 함수를 만들어서 사용
// router.get("/login", (req, res)=>{
//     res.render("home/login");
// });

// 외부파일에서 사용할 수 있도록 set  -> app.js에서 이걸 사용하겠다고 set (app.use)
module.exports = router;