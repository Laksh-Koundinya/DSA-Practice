function runProgram(input) {
   
    input = input.trim().split("\r\n");
  //  console.log(input)
  var arr = input[1].split(" ").map(Number)
var stack = []
  var ans  = []

  for(let i = 0;i<arr.length; i++ ){
      while(stack.length !== 0 && stack[stack.length - 1] >= arr[i]){
          stack.pop()
      }
      if(stack.length === 0){
          ans.push(-1)
      } 
      else{
          ans.push(stack[stack.length - 1])
      }
      stack.push(arr[i])
  }
  console.log(ans.join(" "))
  
    
        
   
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
       
