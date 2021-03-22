function runProgram(input) {
   
    input = input.trim().split("\r\n");
    //console.log(input)
    for(var i = 1; i<input.length; i+=2){
        var arrLen = input[i];
        var arr = input[i+1].split(" ").map(Number)
        var one = []
        var zero = []
        var two = []

        for(let i = 0; i<arrLen;i++){
            if(arr[i] === 0){
                zero.push(arr[i])
            }
            if(arr[i] === 1){
                one.push(arr[i])
            }
            if(arr[i] === 2){
                two.push(arr[i])
            }
        }
        var output = [...zero,...one,...two]
        console.log(output.join(" "))
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
       
