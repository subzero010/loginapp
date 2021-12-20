"use strict";

// controller 부분 
const home = (req, res) => {  // 이크마스크립트(ECMAScript)로 표현, 아래 function hello와 동일
    res.render("home/index");// home/index.ejs 
};
//function home(req, res){  // const home = (req, res)와 동일 
//    res.render("home/index");// home/index.ejs 
//}

const login = (req, res) => {
    res.render("home/login");
};

// 외부파일(index.js)에서 사용할 수 있도록 set --> index.js에서 사용할 수 있도록 set해야됨
module.exports = {//object값 set 
    home,   //home: hello 와 동일 (key값을 value로 자동인식되었다고 보면됨)
    login
};
