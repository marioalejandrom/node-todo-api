/**
 * Created by mario on 7/11/17.
 */
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

let obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');

    // db.collection('Todos').findOneAndDelete({
    //     // _id: new ObjectID('596505bce73feb96342923b6')
    //     completed: false
    // }).then((result) => {
    //     console.log(result);
    // })

    db.collection('Users').deleteMany({
        name: 'Mario'
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5964ee29ee01f80b3de083c8')
    }).then((result) => {
       console.log(result);
    });

    //db.close();
});