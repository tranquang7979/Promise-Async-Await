/*
let aPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('Success');
        reject(new Error('Mission is rejected'));
    }, 2000);
});

aPromise.then(
    (message) => { console.log('Executed: ' + message) },
    (errMsg) => { console.log(errMsg); }
);
*/
//---------------------------------------------------------------
/*let add = (a, b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(typeof(a) !== 'number' || typeof(b) !== 'number')
                return reject(new Error('Parameter must be a number.'));
            resolve(a+b);
        }, 2000);
    });
}
add('4', 5)
.then((res)=> console.log(res), err => console.log(err + ' '));
*/
//---------------------------------------------------------------
/*
console.log('Start read file...');
let fs = require('fs');
let promiseReadFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err) return reject(err);
            resolve(data);
        });
    });
}
promiseReadFile('./text.txt')
.then((res) => console.log(res), (err) => console.log(err));
*/
//---------------------------------------------------------------
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
let countSquare = (a, b, h) => {
    add(a, b)
        .then((res) => multiply(res, h))
        .then((res) => divide(res, 2))
        .then((res) => console.log('Total Square: ' + res))
        .catch((err) => console.log(err + ' '));
};
countSquare(2, 3, 2);

let countSquare_Reuse = (a, b, h) => {
    return add(a, b)
        .then((res) => multiply(res, h))
        .then((res) => divide(res, 2));
};
countSquare_Reuse(2, 3, 2)
    .then((res) => console.log('Total Square: ' + res))
    .catch((err) => console.log(err + ' '));