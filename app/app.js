"use strict";

// 모듈 
const express = require('express');//설치한 라이브러리 첨부
const app = express();
//const PORT = 3000;

// 라우팅 
const home = require("./src/routes/home");//./routes/home에 있는 javascript를 불러오도록 지정 


// 앱 세팅
// views 폴더 생성 > home 폴더 생성 > login.ejs파일 생성   ..백엔드맛보기4강 
// ejs모듈 설치 : npm install ejs -s
app.set("views", "./src/views");
app.set("view engine", "ejs");

// "/"로 들어오면 home으로 보내준다
//const home = require("./routes/home");//./routes/home에 있는 javascript를 불러오도록 지정 
app.use("/", home);// use -> 미들웨어를 등록해주는 메서드


//서버가동.. 포트번호, 띄운 후 실행할 코드  
// 모듈화를 하기위해 /bin/www.js를 만들어서 옮김    ...백엔드맛보기9강
// app.listen(PORT, function(){
//     console.log('listening on 3000....'); //terminal에서 node app.js 로 실행하면 됨 
// });

//www.js에서 app.js를 사용할 수 있도록 export처리 ...백엔드맛보기9강
module.exports = app;

//-----------------------------------------------------------------------
// 아래 내용을 /routes/index.js 파일로 이동 시킴 
// app.get("/", (req, res)=>{
//     //res.send("main 화면");
//     res.render("home/index");
// });
// app.get("/login", (req, res)=>{
//     //res.send("login 화면");
//     res.render("home/login");
// });