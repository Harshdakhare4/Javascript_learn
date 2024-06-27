"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser we can use it in the browser


console.log(3 + 3) 

console.log("Harsh")
let name = "Harsh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => not assigned any value to the variable
// symbol => unique


//object
//console.log(typeof(null));//object
//console.log(typeof(undefined));//undefined
// ***************************
const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//Object
const heros=["Superman","Batman","Shaktiman","Krish"];
let myObj={
    name:"Harsh",
    age:20,
}
//console.log(typeof myObj);
const myfunction=function(){
  //  console.log("Hello");
}
console.log(typeof myfunction);
// Datatypes ----------|----------|
 //               primitive    non-primitive


 //****************************************//
 //Stack(Primitive)    Heap(Non-Primitive)

 let myObjOne={
    name:"Harsh",
    age:20,
}
let myObjTwo=myObjOne;

myObjTwo.name="Esha";
console.log(myObjOne.name);
console.log(myObjTwo.name);

