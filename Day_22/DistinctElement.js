function runProgram(input) {
   
    input = input.trim().split("\r\n");
   // console.log(input)

   for(let i  = 1; i<input.length; i+=2){
       let arrLen = input[i]
       let charCount = {}
       let  arr = input[i+1].split(" ").map(Number)
       for(let k = 0; k<arrLen; k++){
           if(!charCount[arr[k]]){
            charCount[arr[k]] = 1
           }else{
            charCount[arr[k]] += 1
           }
       }
       for(let keys in charCount){
           if(charCount[keys] === 1){
               console.log(keys)
           }
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
      
      
      
    