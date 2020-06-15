var express = require('express');
var app = express();

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
  res.send("Hello codersx");
})


var todos = [
  { id: 1, name: 'Đi Chợ' },
  { id: 2, name: 'Nấu Cơm' },
  { id: 3, name: 'Rửa bát' },
  { id: 4, name: 'Học lập trình trên codersx' },
  { id: 5, name: 'Tán gái' }
];

app.get('/todos', function (req, res) {
  res.render('index', {
    todos: todos
  })
})

app.listen(3000, function () {
  console.log('Server running at port', port)
})