const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
}
const greetings = "Hello World!";
for(const greet of greetings){
   // console.log(`Each character is ${greet}`)
    
}
const map = new Map();
map.set('IN',"INDIA");
map.set('USA',"United States of America");
map.set('FR',"FRANCE");
//console.log(map);

for(const i of map){
    //console.log(i);
    
}
for(const [key,value] of map){
  //  console.log(key,':-',value);
    
}
// for-of loop is not used to iterate the object. 
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman',
    game3: 'COC',
    game4: 'Valorant',
    game5: 'Warship',
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// } it is not iterable. it'll give error.

//--------- FOR-IN LOOP is used to iterate the object.

for (const key in myObject) {
       console.log(myObject[key]);    
    }
