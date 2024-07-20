const myarr =[0,1,2,3,4,5]
//console.log(myarr[2]);

const myarr2= new Array(1,2,3,4);
//console.log(myarr2[2]);
myarr.push(6);
myarr.pop();

// myarr.unshift(2);//****puts the element in the beginning of the array.
// myarr.unshift(3);

 //myarr.shift();//****removes the 1st element in the array.
//****it is parameter less.

// console.log(myarr.includes(8));  //**** returns boolean
// console.log(myarr.includes(4)); 


// console.log(myarr.indexOf(4));
// console.log(myarr2.indexOf(4));
// console.log(myarr);
// console.log(typeof(myarr));
const arr3=myarr.join(); // converts it into  a string.

// console.log(arr3);
// console.log(typeof(arr3));


// const myn1=myarr.concat(myarr2);
//  console.log(myn1);

//*****slice,splice */

 console.log("(A) Original Array:",myarr);

 const myn1=myarr.slice(1,2); 
 //****last element is not included - [1]
 console.log("(B) Array after slice",myarr);
 //**** Original array remains as it is.
 console.log("(B1)",myn1);


 const myn2=myarr.splice(1,2);
 //*****last element is included - [1,2]
console.log("(C) Array after splice",myarr);
//*****Original array's elements that are put in splice are deleted.
//Original array gets manipulated unlike slice.
console.log("(C1)",myn2);

