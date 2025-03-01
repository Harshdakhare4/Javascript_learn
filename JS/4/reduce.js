const mynums = [1,2,3]
// const myTotal = mynums.reduce(function(acc,currval){    console.log(`acc: ${acc} and currval: ${currval}`);

//     return acc+currval;
// },0)

// const myTotal = mynums.reduce((acc,currval) => acc+currval,0)
// console.log(myTotal);

const shoppingcart=[
    {
        item:"js course",
        price:1000
    },
    {
        item:"cpp course",
        price:2000
    },
    {
        item:"java course",
        price:3000
    }
]
const topay= shoppingcart.reduce((acc,item)=>acc + item.price,0);
console.log(topay);
