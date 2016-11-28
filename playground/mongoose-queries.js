const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '583c5003d3a2332d5107938f';

// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid!');
// }
// Todo.find({
//   _id: id
// }).then(todos => console.log('Todos', todos));


// Todo.findOne({
//   _id: id
// }).then(todo => console.log('Todo', todo));

// Todo
//   .findById(id)
//   .then(todo => {
//     if (!todo) return console.log('Id not found');
//     console.log('Todo', todo)
//   })
//   .catch(err => console.log(err));

var userId = "58387d816210d84c9c16dcab";

User
  .findById(userId)
  .then(
    user => {
      if (!user) return console.log('Unable to find user');

      console.log(JSON.stringify(user, null, 2));
    },
    e => console.log(e)
  );
