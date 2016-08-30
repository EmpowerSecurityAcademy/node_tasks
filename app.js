
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

var jsonParser = bodyParser.json({type: "*/*"})

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

url_root = "/todo/api/v1.0"


app.get(url_root+'/tasks', function(req, res) {
  return res.send(tasks);
});

app.post(url_root+'/tasks', jsonParser, function(req, res) {
  last_task = tasks[tasks.length -1]
  req.body.id = last_task.id + 1
  extracted = {}
  extracted.id = last_task.id + 1
  extracted.title = req.body.title
  extracted.description = req.body.description
  extracted.done = req.body.done
  tasks.push(extracted)
  return res.send(tasks[tasks.length -1])
});

app.get(url_root+'/tasks/:id', function(req, res) {
  for (var i = 0; i < tasks.length; i++) {
  	if (tasks[i].id == req.params.id) {
  	  return res.send(tasks[i]);
  	}
  }
  return res.send({"status": 404})
});

app.put(url_root+'/tasks/:id', jsonParser, function(req, res) {
  for (var i = 0; i < tasks.length; i++) {
  	if (tasks[i].id == req.params.id) {
      if (req.body.title){
      	tasks[i].title = req.body.title
      }
      if (req.body.description){
      	tasks[i].description = req.body.description
      }
      if (req.body.done){
      	tasks[i].done = req.body.done
      }
  	  return res.send(tasks[i])
  	}
  }
  return res.send({"status": 404})
});

app.delete(url_root+'/tasks/:id', function(req, res) {
  for (var i = 0; i < tasks.length; i++) {
  	if (tasks[i].id == req.params.id) {
  	  tasks.splice(i, 1)
  	  return res.send({"deleted_id": req.params.id});
  	}
  }
  return res.send({"status": 404})
});


app.listen(3000);
