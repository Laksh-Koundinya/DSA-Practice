function runProgram(input) {
   
    input = input.trim()
    //console.log(input)
  var boxes = Number(input)
  var res = NumberOfways(input)
  console.log(res)


  function NumberOfways(n){
      if(n === 0){
          return 1
      }
      if(n < 0){
          return 0
      }
    else{
        return NumberOfways(n-1) + NumberOfways(n-3) + NumberOfways(n-5)
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
       
