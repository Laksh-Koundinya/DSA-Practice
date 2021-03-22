function runProgram(input) {
   
    input = input.trim()
  var ans  
  checkSteps(input)
  function checkSteps(n){
    if( n === 1 || n ===2 || n === 3|| n === 4 || n=== 5){
      ans = 1
    }
    else{
        
        var res = Math.floor(n/5)
        if(n % 5 !== 0){
            res = res + 1
        }
        ans = res
    }
      
  }
  console.log(ans)

  
 
  
    
        
   
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
       
