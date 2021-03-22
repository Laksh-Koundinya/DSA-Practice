function runProgram(input) {
   
    input = input.trim().split("\r\n");
    //console.log(input)
    var len = input[0]
    var arr = input[1].split(" ").map(Number).sort((a,b)=>a-b)
    
    var res = []

    for(let i = 0; i< len; i+=2){
        res.push(arr[i+1])
        res.push(arr[i])
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
       
