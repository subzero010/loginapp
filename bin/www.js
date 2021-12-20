"use strict";

//node ./bin/www.js 로 서버 실행 

//상위폴더에 있는 app.js를 사용하기 위해 set, app.js에는 여기서 사용할 수 있게 export해야됨 
const app = require("../app");
const PORT = 3000;

app.listen(PORT, () => {
    console.log('listening on 3000....'); //terminal에서 node app.js 로 실행하면 됨 
});

