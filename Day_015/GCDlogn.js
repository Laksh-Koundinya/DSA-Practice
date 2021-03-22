function runProgram(input) {
   
    input = input.trim().split("\n");
   for(let k = 1; k<input.length; k++){
       let [a,b] = input[k].split(" ").map(Number)
       var ans = findGCD(a,b)
       console.log(ans)
   }

    function findGCD(a,b){
        if (a === 0){
          return b
        }
        if (b === 0)
          return a

    if (a === b)
        return a;
    if (a > b){
        return findGCD(a-b, b)
    }
    return findGCD(a, b-a);
    
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
       
