// // You have been given an integer array/list(ARR) of size N 

// // that contains only integers, 0 and 1. Write a function to sort this array/list.


// function ZeroOneSort(){
//   let zero = []
//   let one = []
//   let arr = [0,1,0,1,1,0,0,0]
//   const length = arr.length
 
//   for(let i = 0; i; i++){
    
//   }
//   console.log(...one,...zero)
// }
// ZeroOneSort()





let buffer = [1, 2, 3, 4, 5]
let duplicateBuffer = buffer;
duplicateBuffer[0] = 'hello';
console.log(buffer);//["hello",2,3,4,5]
console.log(duplicateBuffer);//["hello",2,3,4,5]



console.log("first");
Waiter.then((res)=>{
console.log(res)
console.log("third");
})


async function Waiter(){
  let promise = new Promise((res,rej)=>{
    setTimeout(() => {
      res("second");
     }, 0);
  })
  let result = await promise
  return result
}


output: console.log(num);
console.log(index);
var num = 5;
let index = 4


















