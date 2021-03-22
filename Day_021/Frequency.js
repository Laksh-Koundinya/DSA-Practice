function runProgram(input) {
   
    input = input.trim().split("\n");
   var str = input[1].split("").sort()
   var obj = {}
   

   for(let i = 0; i<str.length; i++){
       if(!obj[str[i]]){
           obj[str[i]] = 1
       }
       else{
           obj[str[i]] += 1
       }
   }

   for(keys in obj){
       console.log(keys+"-"+obj[keys] )
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
       
     
       