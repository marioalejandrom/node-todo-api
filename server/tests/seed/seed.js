/**
 * Created by mario on 7/13/17.
 */
const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');


const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const todos = [
    {
        _id: new ObjectID(),
        text: 'First test todo',
        _creator: userOneId
    },
    {
        _id: new ObjectID(),
        text: 'Second test todo',
        completed: true,
        completedAt: 12345,
        _creator: userTwoId
    }
];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const users = [
    {
        _id: userOneId,
        email: 'mario@example.com',
        password: 'userOnePass',
        tokens: [
            {
                access: 'auth',
                token: jwt.sign({_id: userOneId, acess: 'auth'}, '123abc').toString()
            }
        ]

    },
    {
        _id: userTwoId,
        email: 'carmen@example.com',
        password: 'userTwoPass',
        tokens: [
            {
                access: 'auth',
                token: jwt.sign({_id: userTwoId, acess: 'auth'}, '123abc').toString()
            }
        ]
    }
];

const populateUsers = (done) => {
    User.remove({}).then(() => {
        let userOne = new User(users[0]).save();
        let userTwo = new User(users[1]).save();

        //wait for all promises to complete
        return Promise.all([userOne, userTwo]).then(() => done());
    });
};

module.exports = {todos, populateTodos, users, populateUsers};