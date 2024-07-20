const marvel_heros=["Thor","Spiderman","Ironman"];
const dc_heros=["Superman","Wonder Woman","Batman"];

 //const mix=marvel_heros.concat(dc_heros);//****returns a new array.
//console.log(mix);

//marvel_heros.push(dc_heros); //****push returns to the same array
//console.log(marvel_heros[3][1]);
 
const allHeros =[...marvel_heros, ...dc_heros]; //to concat more than 2 arrays into one.
//console.log(allHeros);

const another_array= [1,2,3,[4,5,6],7,[8,9,[3,4]]]

const real_another_array = another_array.flat(1);
const real_another_array1 = another_array.flat(2);
// console.log(real_another_array);
// console.log(real_another_array1);

// console.log(Array.isArray("HARSH"));
// console.log(Array.from("HARSH"));
// console.log(Array.from({name:"Harsh"})) // interesting

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));