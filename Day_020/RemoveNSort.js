function runProgram(input) {
   
    input = input.trim().split("\n");
    //console.log(input)
    var arrLen = input[0];
    var arr = input[1].split(" ").map(Number)
    var res = [arr[0]]
    var l = 1;
    //console.log(res)
    for(let i = 1; i<arrLen ; i++){
        if (res[l - 1] <= arr[i]) {
            res.push(arr[i])
            l += 1;  
        }
      
    }
  console.log(res.join(" "))
    
        
   
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
       
