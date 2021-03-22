function runProgram(input) {
   
    input = input.trim().split("\n");
   // console.log(input)
   for(let i = 1; i<input.length; i++){
       let str = input[i].trim()
       var power  = 1
       let ans = 1
       for(let j = 1; j< str.length; j++){
           if(str[j] === str[j-1]){
               power++
           }
           else{
              ans = Math.max (ans,power)
              power = 1
           }
       }
       ans = Math.max (ans,power)
       console.log(ans)
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
       
