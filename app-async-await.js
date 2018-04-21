
//-- install to use methods in ES7
// npm install --save-dev babel-cli
//-- install babel-preset-es2015, babel-preset-es2017 to interpret
// npm install --save-dev babel-preset-es2015 babel-preset-es2017
//-- create file babel config 'babelrc' to define 'preset' (interpreter)
// touch .babelrc

// Note: AWAIT must be put inside an ASYNC function

import fs from 'fs';

let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) !== 'number' || typeof (b) !== 'number')
                return reject(new Error('Parameter must be a number.'));
            resolve(a + b);
        }, 1000);
    });
}
let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) !== 'number' || typeof (b) !== 'number') {
                return reject(new Error('Parameter must be a number'));
            }
            resolve(a * b);
        }, 1000);
    });
}
let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof (a) !== 'number' || typeof (b) !== 'number') {
                return reject(new Error('Parameter must be a number'));
            }
            if (b === 0) {
                return reject(new Error('b must be greater than 0'));
            }
            //console.log('a/b: ' + a/b);
            resolve(a / b);
        }, 1000);
    })
}

/*
// ASYNC can be written like this
async function add1(){
    console.log('Hello Async');
}
// or ASYNC can be written by an arrow function
let add2 = async () => {
    let res = await add(4, 5);
    console.log(res);
}
add2();
*/

/*
let squareCalculate = async (a, b, h, callback) => {
    try {
        let ab = await add(a, b);
        let abh = await multiply(ab, h);
        let square = await divide(abh, 2);
        //console.log(square);
        callback(undefined, square);
    } catch (error) {
        //console.log(error + ' ');
        callback(error);
    }
}
squareCalculate(4, 5, 6, (error, result) => {
    if (error)
        console.log(error + ' ');
    else
        callback(undefined, square);
});
*/

let squareCalculate = async (a, b, h, callback) => {
    try {
        let ab = await add(a, b);
        let abh = await multiply(ab, h);
        let square = await divide(abh, 2);
        return Promise.resolve(square);
    } catch (error) {
        return Promise.reject(error);
    }
}
squareCalculate(4, 5, 6)
    .then(res => console.log(res))
    .catch(err => console.log(err + ' '));