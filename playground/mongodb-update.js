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

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('596505bce73feb96342923b6')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    //db.close();

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5964f2d7737fcf0bbac9882e')
    },{
        $set: {
            name: 'Mario'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
});