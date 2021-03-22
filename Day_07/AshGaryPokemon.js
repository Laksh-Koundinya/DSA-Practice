function runProgram(input) {
   
    input = input.trim().split("\r\n");
   // console.log(input)

   for(var i = 1; i<input.length; i+= 3){
       var len = input[i]
       var ash = input[i+1].split(" ").map(Number).sort((a,b)=>a-b)
       var gary = input[i+2].split(" ").map(Number).sort((a,b)=>a-b)
      // console.log(gary)
       //console.log(ash)
       var possible = true;
       for(let i = 0; i<len; i++){
           if(ash[i] <= gary[i]){
               possible = false;
               break;
           }
       }
       if(possible){
           console.log("Ash Finally Wins")
       }else{
           console.log("Train Hard Again")
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
       
