
function runProgram(input) {
   
    input = input.trim().split("\r\n");
   // console.log(input[1])
 var inputarr = input[1].split(" ").map(Number)
 //console.log(arr)
var ans = [] 
generateSubSets()

function generateSubSets(arr = [], len = 0, ind = 0){

    if(arr.length === len) {
        ans.push([...arr]) 
    } 

    for(let i = ind; i < inputarr.length; i++) {
        arr.push(inputarr[i])
        generateSubSets(arr, len+ 1, i + 1)
        arr.pop()
    }
}
let count = 0
for(let k = 0; k<ans.length; k++){
    var total = ans[k].reduce((ac,el)=>ac+el,0)
   if(total % 2 !== 0){
       count += 1
   }
}
console.log(count)

  
        
   
       }
       if (process.env.USERNAME === "wjioi") {
           runProgram(`
           8
           39 27 11 4 24 32 32 1`);
       } else {
           process.stdin.resume();
           process.stdin.setEncoding("ascii");
           let read = "";
           process.stdin.on("data", function (input) {
               read += input;
           });
           process.stdin.on("end", function () {
               read = read.replace(/\n$/, "");
               read = read.replace(/\n$/, "");
               runProgram(read);
           });
           process.on("SIGINT", function () {
               read = read.replace(/\n$/, "");
               runProgram(read);
               process.exit(0);
        });
       }
       
