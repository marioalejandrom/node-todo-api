/**
 * Created by mario on 7/12/17.
 */
const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const {User} = require('./../server/models/user');

let id = '596542d8bff4b9128804729a';

let userId = '596516351a95e20f27eada617';

// if(!ObjectId.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//    console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => {
//     console.log('Error', e);
// });

User.findById(userId).then((user) => {
    if(!user){
        return console.log('User Id not found');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
}).catch((e) => {
    console.log('Error', e);
});