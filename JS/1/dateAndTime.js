//Dates

let myDate = new Date()  ;

// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(typeof myDate);

//let myCreatedDate =new Date(2024 ,5, 28);
let myCreatedDate =new Date(2024 ,5, 28,5,3);

// console.log(myCreatedDate.toLocaleString());

let myTimestamp = Date.now();
//console.log( myTimestamp);
// console.log(myCreatedDate.getTime());//Output is in milliseconds

//To convert into seconds
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));

let newDate =new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long",
    
})
