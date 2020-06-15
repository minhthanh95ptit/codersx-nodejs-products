var express = require('express');
var app = express();

var port = 3000;

app.get('/', function (request, response) {
  response.send('HAHAHA');
})

app.get('/todos', function (req, res) {
  res.send('<ul><li>Đi chợ</li><li>Nấu cơm</li><li>Rửa bát</li><li>Học code tạo codersx</li></ul>')
})

app.listen(3000, function () {
  console.log('Server running at port', port)
})