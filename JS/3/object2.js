//const tinderUser = new Object()//Singleton object

const tinderUser ={} //Non singleton Object
tinderUser.id = "123abc"
tinderUser.name= "Sam"
tinderUser.isLoggedIn= false
console.log(tinderUser);

const regularUser = {
    email:"hmdakhare@gmail.com",
    fullname:{
        first:"Harsh",
        last:"Dakhare"
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.first);


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}
// const obj3={obj1 , obj2}
// console.log(obj3);

const obj4=Object.assign(obj1,obj2);
//Syntax: Object.assign(target,source) here target is obj1
const obj5=Object.assign({},obj1,obj2);//obj1 and obj2 are source

//  console.log(obj4);
//  console.log(obj1);

const obj6={...obj1,...obj2}
// console.log(obj6);


const users = [
    {
        id: 1,
        name:"harsh"
    },
    {
        id: 2,
        name:"harsh"
    },
    {
        id: 3,
        name:"harsh"
    }
    
]
// console.log(users[1].id);
//  console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

const navbar = ({company})=>{   //Destructuring of objects

}

navbar(company="hitesh");