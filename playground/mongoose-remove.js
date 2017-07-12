/**
 * Created by mario on 7/12/17.
 */
const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} =  require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findOneAndRemove({
//
// });
//
// Todo.findByIdAndRemove('59667427e73feb963429a1c4').then((todo) => {
//     console.log(JSON.stringify(todo, undefined, 2));
// });