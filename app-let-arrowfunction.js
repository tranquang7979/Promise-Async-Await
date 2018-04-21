
/*-- LET
var a = 10;
console.log(a);

let b = 20;
console.log(b);

if(true){
    var c = 30;
    let d = 40; // only effect in scope
}

console.log('c = ', c);
//console.log('d = ', d); //Exception
*/

// ARROW function
let mang = [4, 3, 7, 5, 1];
mang.forEach((e, index) => {
    console.log(index);
});
mang.forEach(e => console.log(e));
var mang2 = mang.map(e => {return e*2});
var mang3 = mang.map(e => e*2);
console.log(mang2);
console.log(mang3);

var multiply = (e) => e*2;
var mang5 = mang.map(multiply);
console.log(mang5);

function add1(a, b){
    return a + b;
}
let add2 = (a, b) => a + b;
console.log(add1(1, 2));
console.log(add2(1, 2));

let getFunction = (num) => {
    if(num >= 0){
        return () => console.log('greater than 0');
    }
    return () => console.log('less than 0');
}
getFunction(1)();
