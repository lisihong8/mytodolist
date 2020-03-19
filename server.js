const express = require('express');

const app = express();

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  // Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});


app.get('/mytodolist', (req, res) => {
  res.json({
    code:0,
    data:["hello","li","si","hong"],
  });
});




app.listen(8080);
console.log("服务开启啦");
