const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then(todos => {
    res.send({todos});
  }, err => {
    res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  // validate Id using isValid
    // 404 if not valid - send back empty send
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  //findbyid
    // success
      // if todo - send it back
      // if no todo - send back 404 - empty body
    // error
      // 400 invalid request - send back nothing

  Todo
    .findById(id)
    .then(todo => {
      if (!todo) return res.status(404).send();

      res.send({todo});
    })
    .catch(e => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
  // get the id
  var id = req.params.id;

  // validate id
    // 404 if not valid, with empty body
  if (!ObjectID.isValid(id)) return res.status(404).send();

  // remove todo by id
    // success
      // if no doc, send 404
      // if doc, send doc back with a 200
    // error
      // 400 empty body
  Todo
    .findByIdAndRemove(id)
    .then(todo => {
      if (!todo) return res.status(404).send();

      res.send({todo});
    })
    .catch(e => res.status(400).send());
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if (!ObjectID.isValid(id)) return res.status(404).send();

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo
    .findByIdAndUpdate(id, {$set: body}, {new: true})
    .then(todo => {
      if (!todo) return res.status(400).send();

      res.send({todo});
    })
    .catch(err => res.status(400).send());
});

app.listen(port, () => {
  console.log(`Started on port ${port}.`);
});

module.exports = {app};
