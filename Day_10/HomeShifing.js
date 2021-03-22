function runProgram(input) {
   
    input = input.trim().split("\n");
    //console.log(input)
    for(var i = 1; i<input.length; i+=2){
        var [arrLen,days] = input[i].split(" ")
        var arr = input[i+1].split(" ").map(Number)
        var max = arr.reduce((ac,el)=>ac+el,0)
        var minmax = Math.max(...arr)
        console.log(max)
        var sum = 0

        var res = []
        for(let i = 0; i<arrLen; i++){
          sum += Number(arr[i])
          console.log(sum , arr[i])
          console.log(max)

            if(sum > minmax){
                res.push(sum)
                sum = 0

            }

        }
        console.log(res)
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
       
