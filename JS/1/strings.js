const name="Harsh"
const repoCount=50

console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const motherName=new String('SwatiDakhare')
// console.log(motherName[2])
// console.log(motherName.__proto__)
// console.log(motherName.toUpperCase())
// console.log(motherName[2])
// console.log(motherName.toUpperCase()[2])
//console.log(motherName.charAt(5))     //charAt
//console.log(motherName.indexOf('D'))     //indexOf

// Substring

const newString= motherName.substring(0,5);
const rap= motherName.substring(5,12);
console.log(newString);
const anotherString=motherName.slice(-8,3);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());// trim- removes white space or blank space

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(motherName.includes('swati'))
const father="Mahendra-Dakhare"
console.log(father.split('-'))