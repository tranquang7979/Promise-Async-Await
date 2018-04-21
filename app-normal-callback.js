/*
setTimeout(() => {
    console.log('Time out 1 second')
}, 1000);

console.log('End');

let a = 5;
a++;
console.log(a);
*/
//----------------------
/*
let fs = require('fs');
fs.readFile('./text.txt', 'utf8', (err, data) => {
    if(err) return console.log('Error: ' + err);
    console.log('Data: ', data);
});
console.log('End read file');

let data = fs.readFileSync('./text.txt', 'utf8');
console.log(data);
console.log('End read file SYNC');
*/
//----------------------
//let square = (a, b, h) => (a + b) * h / 2;
//console.log('Square: ' + square(2, 3, 2));

let add = (a,b, callback) => {
    setTimeout(() => {
        let err, result;
        if(typeof(a) !== 'number' || typeof(b) !== 'number'){
            err = 'Parameter must be a number';
            return callback(err, result);
        }
        result = a + b;
        callback(err, result);
    }, 1000);
}
let add1 = (a,b, callback) => {
    setTimeout(() => {
        if(typeof(a) !== 'number' || typeof(b) !== 'number'){
            return callback(new Error('Parameter must be a number'));
        }
        callback(undefined, a + b);
    }, 1000);
}
let multiply = (a,b, callback) => {
    setTimeout(() => {
        if(typeof(a) !== 'number' || typeof(b) !== 'number'){
            return callback(new Error('Parameter must be a number'));
        }
        callback(undefined, a * b);
    }, 1000);
}
let divide = (a,b, callback) => {
    setTimeout(() => {
        if(typeof(a) !== 'number' || typeof(b) !== 'number'){
            return callback(new Error('Parameter must be a number'));
        }
        if(b === 0){
            return callback(new Error('b must be greater than 0'));
        }
        //console.log('a/b: ' + a/b);
        callback(undefined, a / b);
    }, 1000);
}
/*add(4, 5, (err, result) => {
    if(err) return console.log('Error function add: ' + err);
    console.log('Result: ' + result);
});*/
let countSquare = (a, b, h, cb) => {
    add1(a, b, (err, result) => {
        if(err) return cb(err);
        //console.log('add1: ' + result);
        multiply(result, h, (err, result) => {
            if(err) return cb(err);
            //console.log('multiply: ' + result);
            divide(result, 2, (err, square) => {
                if(err) return cb(err);
                cb(undefined, square);
            })
        });
    });
};
countSquare(2, 3, 2, (err, result)=> {
    if(err) return console.log(err);
    else console.log('Square: ' + result);
});