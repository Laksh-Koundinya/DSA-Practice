function runProgram(input) {
   
    input = input.trim().split("\n");
   // console.log(input)
for(let i = 1; i<input.length; i++){
    var [A,B] = input[i].split(" ").map(Number)
    if(A === B){
        console.log("Possible")
    }
    else if(B < A){
        console.log("Not Possible")
    }
    else{
        if(checkConversion(A,B)){
            console.log("Possible")
        }
        else{
            console.log("Not Possible")
        }
    }
} 
function checkConversion(A,B){
   if(Number(A) === Number(B)){
       return true
   }
   else if(Number(A) > Number(B)){
       return false
   }
   else{
       return checkConversion(A*2,B) || checkConversion(A+""+1,B)
   }
} 
    
        
   
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
       
