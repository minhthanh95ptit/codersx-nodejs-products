var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = 3000;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.get('/todos/search', function (req, res) {
  var q = req.query.q;
  var mathchedTodos = todos.filter(function (todo) {
    return todo.name.toLowerCase().indexOf(q.toLocaleLowerCase()) != -1
  });
  res.render('index', {
    todos: mathchedTodos,
    q: q
  })
  console.log(req.query);
})

app.get('/todos/create', function (req, res) {
  res.render('todos/create')

})

app.post('/todos/create', function (req, res) {
  console.log(req.body);
  todos.push(req.body);
  // res.redirect('/todos');
  res.redirect('back')
})

app.listen(3000, function () {
  console.log('Server running at port', port)
})