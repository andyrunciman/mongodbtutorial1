//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB');
    return;
  }
  console.log('Connected to MongoDB server');

  //in v3
  //const db = client.db
  db.collection('Todos').insertOne(
    {
      text: 'somthing to do',
      completed: false
    },
    (err, result) => {
      if (err) {
        return console.log('unable to insert todo', err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  db
    .collection('Todos')
    .insertOne({
      text: 'somthing to do 2',
      completed: false
    })
    .then(result => {
      console.log(JSON.stringify(result.ops, undefined, 2));
      console.log(result.ops[0]._id.getTimestamp());
    })
    .catch(err => {
      console.log('unable to insert todo', err);
    });

  db.close();
});
