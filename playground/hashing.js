/**
 * Created by mario on 7/12/17.
 */
const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id:10
};

let token = jwt.sign(data, '123abc');

console.log(token);

let decoded = jwt.verify(token, '123abc');

console.log('decoded', decoded);

// let data = {
//     id: 4
// };
//
// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'salting').toString()
// };
//
// // token.data.id = 5;
// // token.hash =SHA256(JSON.stringify(token.data)).toString();
//
// let resultHash = SHA256(JSON.stringify(token.data) + 'salting').toString();
//
// if(resultHash === token.hash){
//     console.log('Data was not changed');
// }else{
//     console.log('Data was changed. Do not trust!');
// }

