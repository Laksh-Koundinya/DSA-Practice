function runProgram(input) {
   
    input = input.trim().split("\r\n");
   // console.log(input)
   for(let i = 1; i<input.length ; i+=2){
       let arrLen = input[i]
       let arr = input[i+1].split(" ").map(Number)
       let countPair = 0
       for(let k = 0; k<arrLen; k++){
           for(let j = 0; j< arrLen;j++){
           
               if(k !== j){
                  // console.log(arr[k],"K")
                   if(Number(arr[k]) == Number(2 * arr[j])){
                       countPair ++
                   }
               }
           }
        }
        console.log(countPair)
        countPair = 0
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
       
