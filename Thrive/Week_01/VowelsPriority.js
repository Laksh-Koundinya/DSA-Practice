function runProgram(input) {
   
    input = input.trim().split("\r\n");
   // console.log(input)

   for(let i = 1; i<input.length; i++){
       let constants = []
       let vowels = []
       for(let j = 0; j < input[i].length; j++){
           if(input[i][j] === "a" || input[i][j] === "e" || input[i][j] === "i" || input[i][j] === "o" || input[i][j] === "u"){
               vowels.push(input[i][j])
           }
           else{
               constants.push(input[i][j])
           }
       }
     let ans = vowels.join("") + constants.join("") + ""
     console.log(ans.trim())
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
      
      
      
    