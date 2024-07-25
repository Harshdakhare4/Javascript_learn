// constructor ni sigleton bante
// Object.create

//object literals

const mysym = Symbol ("key1")


const JsUser = {
    name:"Harsh",
    "full name":"Harsh Dakhare",
    [mysym]:"mykey1",
    age:20,
    location:"Nagpur",
    email:"harsh@gmail.com",
    isLoggedIn: false,

}//Here all the keys used in  are in the string format
// console.log(JsUser.email);
// console.log(JsUser.name);
// console.log(JsUser["location"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mysym]);
// console.log(typeof(JsUser[mysym])); //Symbol
JsUser.age=21;
console.log(JsUser);

//Object.freeze(JsUser); //After freeze ,the object values can't be manipulated.
JsUser.age=22;
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);  //String interpolation
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



