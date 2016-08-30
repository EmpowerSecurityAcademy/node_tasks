
var express = require('express');
var app = express();

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
  req
});

app.get('/task/:id', function(req, res) {
  exist = {"exist": true}
  res.send(exist);
});

app.put('/task/:id', function(req, res) {
  exist = {"exist": true}
  res.send(exist);
});

app.delete('/task/:id', function(req, res) {
  exist = {"exist": true}
  res.send(exist);
});


app.listen(3000);