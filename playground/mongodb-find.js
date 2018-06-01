//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB');
    return;
  }
  console.log('Connected to MongoDB server');

  db
    .collection('Todos')
    .find({ _id: new ObjectID('5b10f798117e1bcd20b05a96') })
    .toArray()
    .then(
      docs => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log('unable to fetch todos');
      }
    );

  //db.close();
});
