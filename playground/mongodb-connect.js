// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("58384e1575ab5c26168b2e10")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(result => console.log(result));

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID("58384e1575ab5c26168b2e10")
  }, {
    $set: {
      name: 'Derpington'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(res => console.log(res));

  // db.close();
});
