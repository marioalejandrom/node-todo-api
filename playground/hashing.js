/**
 * Created by mario on 7/12/17.
 */
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let pwd = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//    bcrypt.hash(pwd, salt, (err, hash) => {
//        console.log(hash);
//    });
// });

let hashPassword = '$2a$10$ZIg4F3xYxIQElItLV2PLAeXz9U/IHXfoeXUAZF/YN7guQseutvQDi';

bcrypt.compare(pwd, hashPassword, (err, res) => {
    console.log(res);
});