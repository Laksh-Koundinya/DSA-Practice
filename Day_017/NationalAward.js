function runProgram(input) {
   
    input = input.trim().split("\n");

    for(let i = 1; i<input.length; i+= 2){
        var arrLen = input[i]
        var arr = input[i+1].split(" ").map(Number)
        var one = []
        var two = []
        var zero = []
        for(let k = 0; k<arrLen; k++){
            if(arr[k] === 0){
                zero.push(arr[k])
            }
            if(arr[k] === 1){
                one.push(arr[k])
            }
            if(arr[k] === 2){
                two.push(arr[k])
            }
            
        }
        console.log(...zero,...one,...two)
    }
    //console.log(input)

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
       
