const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo
//   .remove({})
//   .then(res => {
//     console.log(res)
//   });

// FindOneAndRemove
// Todo
//   .findOneAndRemove({_id: '583c6e5a24a9bb8023302d0f'})
//   .then(doc => console.log(doc));


// FindByIdAndRemove
// Todo
//   .findByIdAndRemove('583c6e5a24a9bb8023302d0f')
//   .then(doc => console.log(doc));

