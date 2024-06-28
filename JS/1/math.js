const score=400;
// console.log(score);
// console.log(typeof(score));

const balance= new Number(1000.995984);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const num=4000000.652;
const num1=40.652;
//console.log(num.toPrecision(3))
//console.log(num1.toPrecision(2))
//console.log(num.toLocaleString('en-IN'))


//--------------------------------------------------

//Math

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(5.8));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.5));
// console.log(Math.min(4,3,4,7));
console.log(Math.max(4,3,4,7));
console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.ceil(Math.random()*10)+1);

/*************/

// Important formula
const min =10;
const max =20;
console.log(Math.random() * (max - min + 1) + min);
console.log(Math.floor(Math.random() * (max - min + 1) + min));
