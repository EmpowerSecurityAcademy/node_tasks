
var express = require('express');
var app = express();

app.configure(function(){
    app.use(express.bodyParser());
});

tasks = [
	{
		"id": 1,
		"title": "Buy groceries",
		"description": "Milk, Cheese, Pizza, Fruit, Tylenol",
		"done": false
	},
	{
		"id": 2,
		"title": "Learn JavaScript",
		"description": "Need to find a good JavaScript tutorial on the web",
		"done": false
	}
]

url_root = "/todo/api/v1.0/"


app.get(url_root+'/tasks', function(req, res) {
  res.send(tasks);
});

app.post(url_root+'/tasks', function(req, res) {
  last_task = tasks[tasks.length -1]
  req.body.id = last_task.id + 1
  tasks.append(req.body)
});

app.get('/task/:id', function(req, res) {
  for (var i = 0; i < tasks.length; i++) {
  	if (tasks[i].id == req.params.id) {
  		  res.send(tasks[i]);
  	}
  }
  else res.send({"status": 404})
});

app.put('/task/:id', function(req, res) {
  req.body.id
});

app.delete('/task/:id', function(req, res) {
  for (var i = 0; i < tasks.length; i++) {
  	if (tasks[i].id == req.params.id) {
  		  tasks.pop(tasks[i])
  		  res.send(tasks[i]);
  	}
  }
  else res.send({"status": 404})
});


app.listen(3000);